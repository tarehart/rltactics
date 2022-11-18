<template>
  <div>
    <input type="text" v-model="name" placeholder="Lobby Title" />
    <button v-on:click="createLobby">Create Lobby</button>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import type { GraphQLResult } from '@aws-amplify/api-graphql';
  import { API } from 'aws-amplify';
  import { createTacticsLobby } from '../graphql/mutations';

  export default {
    name: 'app',
    data() {
      return {
        name: '',
        description: ''
      };
    },
    methods: {
      async createLobby() {
        const { name } = this;
        if (!name) return;
        const result: GraphQLResult<any> = await API.graphql({
          query: createTacticsLobby,
          variables: { input: { name } }
        });
        const lobbyId = result.data.createTacticsLobby.id;
        this.name = '';
        router.push(`/lobby/${lobbyId}`)
      }
    }
  };
</script>