<template>
  <div v-if="gameResult?.getGame">
    <h2>Welcome to the game!</h2>
    <p>Game title: {{ gameResult.getGame.title }}</p>
    <p>New title: <input type="text" v-model="newTitle" /><button @click="updateTitle">Submit</button></p>

    <span>Created {{ gameResult.getGame.createdAt }}</span>
    <button @click="addRound">Add round</button>
    <div v-for="round in gameResult.getGame.rounds?.items">
      <p v-if="round">
        <GameRound :game-round-id="round?.id" />
      </p>
    </div>
  </div>
  <span v-else>LOADING</span>

</template>

<script lang="ts">
import type { CreateGameRoundMutation, GetGameQuery, UpdateGameMutation } from '@/API';
import GeometryView from '@/components/GeometryView.vue';
import { createGameRound, updateGame } from '@/graphql/mutations';
import { useMutation, useQuery, useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref } from 'vue';
import { getGame } from '../graphql/queries';
import { onGameRoundByGameId, onUpdateGame } from '../graphql/subscriptions';
import GameRound from '@/components/GameRound.vue';


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
      result: gameResult, loading: gameLoading, error: gameError, subscribeToMore, refetch: gameRefetch,
    } = useQuery<GetGameQuery>(gql(getGame), { id: props.gameId });

    // https://v4.apollo.vuejs.org/guide-composable/subscription.html#subscribetomore
    subscribeToMore({
      document: gql(onUpdateGame),
      variables: {
        filter: { id: { eq: props.gameId } }
      },
    });

    const { mutate: updateGameMutation } = useMutation<UpdateGameMutation>(gql(updateGame));

    const newTitle = ref('');
    const updateTitle = () => {
      updateGameMutation({
        input: { id: props.gameId, title: newTitle.value },
      })
    }

    // TODO: this thing is not writing to the apollo cache
    const { onResult } = useSubscription(gql(onGameRoundByGameId), {
      gameRoundsId: props.gameId,
    });
    onResult(result => {
      console.log("Got game round from subscription")
      console.log(JSON.stringify(result.data));
      // TODO: instead of refetch, write directly to cache.
      // Currently getting no coding assistance for the
      // commented out code below, skeptical that it would work.
      // const apolloClient = resolveClient();
      // let data = apolloClient.readQuery<GetGameQuery>(gql(getGame), { id: props.gameId });
      // apolloClient.writeQuery({
      //   query: gql(getGame),
      //   variables: { id: props.gameId },
      //   data
      // });
      gameRefetch();
    });

    const { mutate: createGameRoundMutation } = useMutation<CreateGameRoundMutation>(gql(createGameRound));
    const addRound = () => {
      console.log("Adding.");
      createGameRoundMutation({
        input: {
          initialCarStates: [],
          initialBallState: { position: { x: 0, y: 0 }, velocity: { x: 0, y: 0 } },
          carPlans: [],
          gameRoundsId: props.gameId,
        }
      });
    };

    return {
      gameResult,
      updateTitle,
      newTitle,
      addRound,
    }
  },
  components: { GeometryView, GameRound },
};
</script>
