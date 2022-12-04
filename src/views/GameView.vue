<template>
  <div v-if="gameResult?.getGame">
    <h2>Welcome to the game!</h2>
    <p>Game title: {{ gameResult.getGame.title }}</p>
    <p>New title: <input type="text" v-model="newTitle" /><button @click="updateTitle">Submit</button></p>

    <span>Created {{ gameResult.getGame.createdAt }}</span>
    <button @click="addRound">Add round</button>
    <div 
      v-if="gameResult.getGame.rounds?.items" 
      v-for="(round, index) in gameResult.getGame.rounds.items"
    >
      <p v-if="round">
        <GameRoundDisplay 
          :game-round-id="round.id" 
          :is-latest-round="index === gameResult.getGame.rounds.items.length - 1" 
        />
      </p>
    </div>
  </div>
  <span v-else>LOADING</span>

</template>

<script lang="ts">
import { 
  type GameRound, 
  type CreateCarPlanMutation, 
  type CreateGameRoundMutation, 
  type GetGameQuery, 
  type GetGameWithRoundsQuery, 
  type OnGameRoundByGameIdSubscription, 
  type UpdateGameMutation, 
  type CarPlan,
  type CarState,
  type CreateCarPlanInput,
} from '@/API';
import GeometryView from '@/components/GeometryView.vue';
import { createGameRound, createCarPlan, updateGame } from '@/graphql/mutations';
import { useApolloClient, useMutation, useQuery, useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref } from 'vue';
import { getGame, getGameRound } from '../graphql/queries';
import { onGameRoundByGameId, onUpdateGame } from '../graphql/subscriptions';
import GameRoundDisplay from '@/components/GameRoundDisplay.vue';
import { getGameWithRounds } from '@/graphql/customQueries';
import { generateUUID } from 'three/src/math/MathUtils';


export default {
  name: "app",
  props: {
    gameId: {
      type: String,
      required: true,
    }
  },
  setup(props) {

    const {
      result: gameResult, loading: gameLoading, error: gameError, subscribeToMore, 
      refetch: gameRefetch, onResult: onGameResult,
    } = useQuery<GetGameWithRoundsQuery>(getGameWithRounds, { id: props.gameId });

    const getLatestRound = (): GameRound | null => {
      if (gameResult.value?.getGame?.rounds?.items) {
        const rounds = gameResult.value.getGame.rounds.items;
        if (rounds.length > 0) {
          return rounds[rounds.length - 1] as GameRound;
        }
      }
      return null;
    }

    // https://v4.apollo.vuejs.org/guide-composable/subscription.html#subscribetomore
    // This will automatically update the game query in the cache, but *not*
    // the gameRound queries.
    subscribeToMore({
      document: gql(onUpdateGame),
      variables: {
        filter: { id: { eq: props.gameId } }
      },
    });

    const { client } = useApolloClient();
    // Proactively write the round data into the cache in the format of
    // getGameRound queries. This is the only way to get a cache hit if
    // we run a getGameRound query in the future.
    onGameResult((data) => {
      data.data.getGame?.rounds?.items.forEach((round) => {
        if (round) {
          client.writeQuery({
            query: gql(getGameRound),
            variables: { id: round.id },
            data: { getGameRound: round },
          });
        }
      });
    });

    const { mutate: updateGameMutation } = useMutation<UpdateGameMutation>(gql(updateGame));

    const newTitle = ref('');
    const updateTitle = () => {
      updateGameMutation({
        input: { id: props.gameId, title: newTitle.value },
      })
    }

    const { onResult } = useSubscription<OnGameRoundByGameIdSubscription>(gql(onGameRoundByGameId), {
      gameRoundsId: props.gameId,
    });
    onResult(result => {
      if (!result.data?.onGameRoundByGameId) {
        return;
      }
      console.log("Got game round from subscription")
      console.log(JSON.stringify(result.data));
      // Instead of refetch, write directly to cache.
      // https://www.apollographql.com/docs/react/caching/cache-interaction/#using-updatequery-and-updatefragment
      client.cache.updateQuery<GetGameQuery>({
        query: gql(getGame), 
        variables: { id: props.gameId }
      }, (data) => {
        if (!data?.getGame?.rounds?.items) {
          return undefined; // Don't update cache.
        }
        return {
          getGame: { ...data?.getGame, rounds: { 
            ...data?.getGame?.rounds, items: [...data?.getGame?.rounds?.items, result.data?.onGameRoundByGameId]
          }}
        } as GetGameQuery;
      });
    });

    const { mutate: createGameRoundMutation, onDone: onGameRoundCreated } = useMutation<CreateGameRoundMutation>(gql(createGameRound));
    const { mutate: createCarPlanMutation } = useMutation<CreateCarPlanMutation>(gql(createCarPlan));
    const addRound = () => {
      console.log("Adding.");
      createGameRoundMutation({
        input: {
          initialBallState: { position: { x: 0, y: 0, z: 0 }, velocity: { x: 0, y: 0, z: 0 } },
          gameRoundsId: props.gameId,
        }
      });
      
    };

    const getFinalState = (plan: CarPlan): CarState | null => {
      if (!plan) return null;
      if (plan.steps?.length > 0) {
        const lastStep = plan.steps[plan.steps.length - 1];
        return {
          ...plan.initialCarState,
          position: lastStep.waypoint.position,
        } as CarState;
      }
      return plan.initialCarState;
    };

    onGameRoundCreated((gameRound) => {
      const newRoundId = gameRound?.data?.createGameRound?.id
      if (!newRoundId) {
        return;
      }
      const previousRound = getLatestRound();
      if (previousRound) {
        previousRound.carPlans?.items?.forEach((plan) => {
          if (!plan) return;
          const initialState = getFinalState(plan);
          createCarPlanMutation({
            input: {
              initialCarState: initialState,
              gameRoundCarPlansId: newRoundId,
              steps: [],
            } as CreateCarPlanInput,
          });
        });
      } else {
        const teamSize = gameResult.value?.getGame?.teamSize;
        if (typeof teamSize === 'number' && teamSize > 0) {
          for (let team = 0; team <= 1; team++) {
            for (let member = 0; member < teamSize; member++) {
              createCarPlanMutation({
                input: {
                  initialCarState: {
                    car: { 
                      team, 
                      name: `${team ? 'Orange' : 'Blue'} player ${member}`,
                      id: generateUUID(),
                    },
                    boostAmount: 100,
                    position: { x: member * 500, y: team ? 3000 : -3000, z: 0 },
                    velocity: { x: 0, y: 0, z: 0 },
                  }, 
                  gameRoundCarPlansId: newRoundId,
                  steps: [],
                } as CreateCarPlanInput,
              });
            }
          }
        }
      }
    });

    return {
      gameResult,
      updateTitle,
      newTitle,
      addRound,
    }
  },
  components: { GeometryView, GameRoundDisplay },
};
</script>
