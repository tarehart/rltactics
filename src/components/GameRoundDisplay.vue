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
      <VueDrawingCanvas :round-context="canvasRoundContext" :path-updated-callback="onPathUpdated" />
    </div>
  </div>
  <div v-else>LOADING</div>
</template>

<script lang="ts">
import type { CarPlan, CarState, GetRoundWithPlansQuery, UpdateCarPlanInput, UpdateCarPlanMutation, UpdateGameRoundMutation } from '@/API';
import { getRoundWithPlans } from '@/graphql/customQueries';
import { updateCarPlan, updateGameRound } from '@/graphql/mutations';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import type { Vector3 } from 'three';
import { ref } from 'vue';
import { onUpdateGameRound } from '../graphql/subscriptions';
import VueDrawingCanvas, { type RoundContext } from './VueDrawingCanvas.vue';


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
        const { result, loading, error, subscribeToMore, onResult } = useQuery<GetRoundWithPlansQuery>(getRoundWithPlans, { id: props.gameRoundId });
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

        const canvasRoundContext = ref<RoundContext|undefined>(undefined);

        onResult((gameRoundResult) => {
          if (gameRoundResult.data.getGameRound?.carPlans) {
            canvasRoundContext.value = {
              carStarts: gameRoundResult.data.getGameRound.carPlans.items.map((plan) => plan?.initialCarState)
            } as RoundContext;
          }
        });

        const { mutate: mutateCarPlan } = useMutation<UpdateCarPlanMutation>(gql(updateCarPlan));

        const onPathUpdated = (carStart: CarState, points: Vector3[]) => {
          console.log(points);
          if (result.value?.getGameRound?.carPlans) {
            const carPlans = result.value.getGameRound.carPlans.items as CarPlan[];
            const matchingPlan = carPlans.find((plan: CarPlan) => carStart.car.id === plan.initialCarState.car.id);
            if (matchingPlan) {
              const waypoints = points.map((point) => ({
                waypoint: { position: { x: point.x, y: point.y, z: point.z } },
                useBoost: false, 
                startDodge: false,
              }));
              mutateCarPlan({
                input: {
                  id: matchingPlan.id,
                  steps: waypoints,
                  gameRoundCarPlansId: result.value.getGameRound.id,
                } as UpdateCarPlanInput
              });
            }
          }
          
        };
        
        return {
          result,
          moveBall,
          error,
          loading,
          canvasRoundContext,
          onPathUpdated,
        };
    },
    components: { VueDrawingCanvas }
};
</script>
