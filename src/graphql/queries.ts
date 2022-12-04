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
          gameRoundsId
          createdAt
          updatedAt
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
      gameRoundsId
      initialBallState {
        position {
          x
          y
          z
        }
        velocity {
          x
          y
          z
        }
      }
      carPlans {
        items {
          id
          createdAt
          updatedAt
          gameRoundCarPlansId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        gameRoundsId
        carPlans {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCarPlan = /* GraphQL */ `
  query GetCarPlan($id: ID!) {
    getCarPlan(id: $id) {
      id
      initialCarState {
        car {
          id
          team
          name
        }
        boostAmount
        position {
          x
          y
          z
        }
        velocity {
          x
          y
          z
        }
      }
      steps {
        waypoint {
          timeOffset
        }
        useBoost
        startDodge
      }
      createdAt
      updatedAt
      gameRoundCarPlansId
    }
  }
`;
export const listCarPlans = /* GraphQL */ `
  query ListCarPlans(
    $filter: ModelCarPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        initialCarState {
          boostAmount
        }
        steps {
          useBoost
          startDodge
        }
        createdAt
        updatedAt
        gameRoundCarPlansId
      }
      nextToken
    }
  }
`;
