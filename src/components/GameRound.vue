<template>
  <div v-if="result?.getGameRound">
    <h2>Welcome to the round!</h2>
    <p>Round: {{ result.getGameRound.id }}</p>
    <ul>
      <li v-if="result.getGameRound.initialBallState">
        Ball position: ({{ result.getGameRound.initialBallState.position.x }},
        {{ result.getGameRound.initialBallState.position.y }})
        <button @click="moveBall">Move Ball</button>
      </li>
    </ul>
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
    const {
      result, loading, error, subscribeToMore,
    } = useQuery<GetGameRoundQuery>(gql(getGameRound), { id: props.gameRoundId }, { fetchPolicy: 'cache-only'});

    // https://v4.apollo.vuejs.org/guide-composable/subscription.html#subscribetomore
    subscribeToMore({
      document: gql(onUpdateGameRound),
      variables: {
        filter: { id: { eq: props.gameRoundId } }
      },
    });
    

    const { mutate } = useMutation<UpdateGameRoundMutation>(gql(updateGameRound));

    const moveBall = () => {
      const arbitraryNumber = new Date().getSeconds();
      mutate({
        input: {
          id: props.gameRoundId,
          initialBallState: { position: { x: arbitraryNumber, y: 0 }, velocity: { x: 0, y: 0 } },
        },
      })
    }

    return {
      result,
      moveBall,
      error,
      loading,
    }
  },
};
</script>
