/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTacticsLobby = /* GraphQL */ `
  query GetTacticsLobby($id: ID!) {
    getTacticsLobby(id: $id) {
      id
      name
      game {
        id
        title
        teamSize
        lobby {
          id
          name
          createdAt
          updatedAt
          tacticsLobbyGameId
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
        gameLobbyId
      }
      createdAt
      updatedAt
      tacticsLobbyGameId
    }
  }
`;
export const listTacticsLobbies = /* GraphQL */ `
  query ListTacticsLobbies(
    $filter: ModelTacticsLobbyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTacticsLobbies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        game {
          id
          title
          teamSize
          createdAt
          updatedAt
          gameLobbyId
        }
        createdAt
        updatedAt
        tacticsLobbyGameId
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      title
      teamSize
      lobby {
        id
        name
        game {
          id
          title
          teamSize
          createdAt
          updatedAt
          gameLobbyId
        }
        createdAt
        updatedAt
        tacticsLobbyGameId
      }
      rounds {
        items {
          id
          createdAt
          updatedAt
          gameRoundsId
        }
        nextToken
      }
      createdAt
      updatedAt
      gameLobbyId
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        teamSize
        lobby {
          id
          name
          createdAt
          updatedAt
          tacticsLobbyGameId
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
        gameLobbyId
      }
      nextToken
    }
  }
`;
export const getGameRound = /* GraphQL */ `
  query GetGameRound($id: ID!) {
    getGameRound(id: $id) {
      id
      game {
        id
        title
        teamSize
        lobby {
          id
          name
          createdAt
          updatedAt
          tacticsLobbyGameId
        }
        rounds {
          nextToken
        }
        createdAt
        updatedAt
        gameLobbyId
      }
      createdAt
      updatedAt
      gameRoundsId
    }
  }
`;
export const listGameRounds = /* GraphQL */ `
  query ListGameRounds(
    $filter: ModelGameRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        game {
          id
          title
          teamSize
          createdAt
          updatedAt
          gameLobbyId
        }
        createdAt
        updatedAt
        gameRoundsId
      }
      nextToken
    }
  }
`;
