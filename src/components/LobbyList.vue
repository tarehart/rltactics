<template>
  <ul v-if="result?.listTacticsLobbies?.items">
    <li v-for="lobby in result.listTacticsLobbies.items" :key="lobby?.id">
      <span v-if="lobby"><router-link :to="{ path: `/lobby/${lobby.id}` }">{{lobby?.name}}</router-link> - {{lobby?.createdAt}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import type { ListTacticsLobbiesQuery } from '@/API';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { listTacticsLobbies } from '../graphql/queries';


export default {
  name: "lobbyList",
  setup() {
    const {
      result, loading, error,
    } = useQuery<ListTacticsLobbiesQuery>(gql(listTacticsLobbies));

    return {
      result,
      error,
      loading,
    }
  },
};
</script>
