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
        rounds {
          nextToken
        }
        createdAt
        updatedAt
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
        rounds {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameRound = /* GraphQL */ `
  query GetGameRound($id: ID!) {
    getGameRound(id: $id) {
      id
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
        createdAt
        updatedAt
        gameRoundsId
      }
      nextToken
    }
  }
`;
