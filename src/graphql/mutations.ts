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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGameRound = /* GraphQL */ `
  mutation CreateGameRound(
    $input: CreateGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    createGameRound(input: $input, condition: $condition) {
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
export const updateGameRound = /* GraphQL */ `
  mutation UpdateGameRound(
    $input: UpdateGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    updateGameRound(input: $input, condition: $condition) {
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
export const deleteGameRound = /* GraphQL */ `
  mutation DeleteGameRound(
    $input: DeleteGameRoundInput!
    $condition: ModelGameRoundConditionInput
  ) {
    deleteGameRound(input: $input, condition: $condition) {
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
