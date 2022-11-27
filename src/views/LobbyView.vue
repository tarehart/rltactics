<template>
  <div v-if="lobby">
    <h2>Welcome to the lobby!</h2>
    <h3>{{lobby.name}}</h3>
    <span>Created {{lobby.createdAt}}</span>
    <div v-if="lobby.game">
      <GameView :gameId="lobby.game.id" />
    </div>
    <div v-else>
      <button v-on:click="createGame">Start Game</button>
    </div>
  </div>
  <span v-else>LOADING</span>
  
  
</template>

<script lang="ts">
  import type { Game, TacticsLobby } from '@/API';
  import GeometryView from '@/components/GeometryView.vue';
  import type { GraphQLResult } from '@aws-amplify/api-graphql';
  import { API } from 'aws-amplify';
  import { getTacticsLobby } from '../graphql/queries';
  import { createGame, updateTacticsLobby } from '../graphql/mutations';
import GameView from './GameView.vue';

  export default {
    name: "app",
    async created() {
        // watch the params of the route to fetch the data again
        this.$watch(() => this.$route.params, () => { this.getLobby(this.$route.params.lobbyId.toString()); }, { immediate: true });
    },
    data() {
        return {
            lobby: null as TacticsLobby | null,
            loading: false,
        };
    },
    methods: {
        async getLobby(lobbyId: string) {
            this.loading = true;
            const result: GraphQLResult<any> = await API.graphql({
                query: getTacticsLobby,
                variables: { id: lobbyId }
            });
            this.loading = false;
            this.lobby = result.data.getTacticsLobby as TacticsLobby;
        },
        async createGame() {
          if (this.lobby && !this.lobby.game) {
            const result: GraphQLResult<any> = await API.graphql({
              query: createGame,
              variables: { input: { title: 'My Game Title', teamSize: 3 } }
            });
            this.lobby.game = result.data.createGame as Game;

            const lobbySaveResult: GraphQLResult<any> = await API.graphql({
                query: updateTacticsLobby,
                variables: { input: { id: this.lobby.id, name: this.lobby.name, tacticsLobbyGameId: this.lobby.game.id } },
            });

            console.log(lobbySaveResult);
          }
        }
    },
    components: { GeometryView, GameView }
};
</script>

<style scoped>

</style>