/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTacticsLobby = /* GraphQL */ `
  mutation CreateTacticsLobby(
    $input: CreateTacticsLobbyInput!
    $condition: ModelTacticsLobbyConditionInput
  ) {
    createTacticsLobby(input: $input, condition: $condition) {
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
export const updateTacticsLobby = /* GraphQL */ `
  mutation UpdateTacticsLobby(
    $input: UpdateTacticsLobbyInput!
    $condition: ModelTacticsLobbyConditionInput
  ) {
    updateTacticsLobby(input: $input, condition: $condition) {
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
export const deleteTacticsLobby = /* GraphQL */ `
  mutation DeleteTacticsLobby(
    $input: DeleteTacticsLobbyInput!
    $condition: ModelTacticsLobbyConditionInput
  ) {
    deleteTacticsLobby(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGameRound = /* GraphQL */ `
  mutation CreateGameRound(
    $input: CreateGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    createGameRound(input: $input, condition: $condition) {
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
export const updateGameRound = /* GraphQL */ `
  mutation UpdateGameRound(
    $input: UpdateGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    updateGameRound(input: $input, condition: $condition) {
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
export const deleteGameRound = /* GraphQL */ `
  mutation DeleteGameRound(
    $input: DeleteGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    deleteGameRound(input: $input, condition: $condition) {
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
export const createCarPlan = /* GraphQL */ `
  mutation CreateCarPlan(
    $input: CreateCarPlanInput!
    $condition: ModelCarPlanConditionInput
  ) {
    createCarPlan(input: $input, condition: $condition) {
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
export const updateCarPlan = /* GraphQL */ `
  mutation UpdateCarPlan(
    $input: UpdateCarPlanInput!
    $condition: ModelCarPlanConditionInput
  ) {
    updateCarPlan(input: $input, condition: $condition) {
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
export const deleteCarPlan = /* GraphQL */ `
  mutation DeleteCarPlan(
    $input: DeleteCarPlanInput!
    $condition: ModelCarPlanConditionInput
  ) {
    deleteCarPlan(input: $input, condition: $condition) {
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
