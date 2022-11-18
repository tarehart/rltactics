<template>
  <div v-if="lobby">
    <h2>Welcome to the lobby!</h2>
    <h3>{{lobby.name}}</h3>
    <span>Created {{lobby.createdAt}}</span>
  </div>
  <span v-else>LOADING</span>
  <GeometryView filename="pitch" />
</template>

<script lang="ts">
  import type { TacticsLobby } from '@/API';
import GeometryView from '@/components/GeometryView.vue';
  import type { GraphQLResult } from '@aws-amplify/api-graphql';
  import { API } from 'aws-amplify';
  import { getTacticsLobby } from '../graphql/queries';

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
        }
    },
    components: { GeometryView }
};
</script>