<template>
  <div v-if="result?.getGameRound">
    <p><span v-if="isLatestRound">[ACTIVE] </span>Round: {{ result.getGameRound.id }}</p>
    <div v-if="isLatestRound">
      <div v-if="result.getGameRound.initialBallState">
        Ball position: ({{ result.getGameRound.initialBallState.position.x }},
        {{ result.getGameRound.initialBallState.position.y }}, 
        {{ result.getGameRound.initialBallState.position.z }}
        )
        <button @click="moveBall">Move Ball</button>
      </div>
      <ol>
        <li v-for="carPlan in result.getGameRound.carPlans?.items" :key="carPlan?.id">
          <span v-if="carPlan">Car plan created at {{carPlan.createdAt}}</span>
        </li>
      </ol>
      <VueDrawingCanvas />
    </div>
  </div>
  <div v-else>LOADING</div>
</template>

<script lang="ts">
import type { GetGameRoundQuery, UpdateGameRoundMutation } from '@/API';
import { updateGameRound } from '@/graphql/mutations';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { getGameRound } from '../graphql/queries';
import { onUpdateGameRound } from '../graphql/subscriptions';
import VueDrawingCanvas from './VueDrawingCanvas.vue';


export default {
    name: "gameRound",
    props: {
        gameRoundId: {
            type: String,
            required: true,
        },
        isLatestRound: {
            type: Boolean,
        }
    },
    setup(props) {
        const { result, loading, error, subscribeToMore, } = useQuery<GetGameRoundQuery>(gql(getGameRound), { id: props.gameRoundId });
        if (props.isLatestRound) {
            // https://v4.apollo.vuejs.org/guide-composable/subscription.html#subscribetomore
            subscribeToMore({
                document: gql(onUpdateGameRound),
                variables: {
                    filter: { id: { eq: props.gameRoundId } }
                },
            });
        }
        const { mutate } = useMutation<UpdateGameRoundMutation>(gql(updateGameRound));
        const moveBall = () => {
            const arbitraryNumber = new Date().getSeconds();
            mutate({
                input: {
                    id: props.gameRoundId,
                    initialBallState: { position: { x: arbitraryNumber, y: 0, z: 0 }, velocity: { x: 0, y: 0, z: 0 } },
                },
            });
        };
        return {
            result,
            moveBall,
            error,
            loading,
        };
    },
    components: { VueDrawingCanvas }
};
</script>
