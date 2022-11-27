/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onGameRoundByGameId = /* GraphQL */ `
  subscription OnGameRoundByGameId($gameRoundsId: ID!) {
    onGameRoundByGameId(gameRoundsId: $gameRoundsId) {
      id
      gameRoundsId
      initialCarStates {
        car {
          id
          team
        }
        boostAmount
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      initialBallState {
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      carPlans {
        steps {
          useBoost
          startDodge
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTacticsLobby = /* GraphQL */ `
  subscription OnCreateTacticsLobby(
    $filter: ModelSubscriptionTacticsLobbyFilterInput
  ) {
    onCreateTacticsLobby(filter: $filter) {
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
export const onUpdateTacticsLobby = /* GraphQL */ `
  subscription OnUpdateTacticsLobby(
    $filter: ModelSubscriptionTacticsLobbyFilterInput
  ) {
    onUpdateTacticsLobby(filter: $filter) {
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
export const onDeleteTacticsLobby = /* GraphQL */ `
  subscription OnDeleteTacticsLobby(
    $filter: ModelSubscriptionTacticsLobbyFilterInput
  ) {
    onDeleteTacticsLobby(filter: $filter) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreateGameRound = /* GraphQL */ `
  subscription OnCreateGameRound(
    $filter: ModelSubscriptionGameRoundFilterInput
  ) {
    onCreateGameRound(filter: $filter) {
      id
      gameRoundsId
      initialCarStates {
        car {
          id
          team
        }
        boostAmount
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      initialBallState {
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      carPlans {
        steps {
          useBoost
          startDodge
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameRound = /* GraphQL */ `
  subscription OnUpdateGameRound(
    $filter: ModelSubscriptionGameRoundFilterInput
  ) {
    onUpdateGameRound(filter: $filter) {
      id
      gameRoundsId
      initialCarStates {
        car {
          id
          team
        }
        boostAmount
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      initialBallState {
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      carPlans {
        steps {
          useBoost
          startDodge
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameRound = /* GraphQL */ `
  subscription OnDeleteGameRound(
    $filter: ModelSubscriptionGameRoundFilterInput
  ) {
    onDeleteGameRound(filter: $filter) {
      id
      gameRoundsId
      initialCarStates {
        car {
          id
          team
        }
        boostAmount
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      initialBallState {
        position {
          x
          y
        }
        velocity {
          x
          y
        }
      }
      carPlans {
        steps {
          useBoost
          startDodge
        }
      }
      createdAt
      updatedAt
    }
  }
`;
