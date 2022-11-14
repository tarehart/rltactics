/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTacticsLobby = /* GraphQL */ `
  subscription OnCreateTacticsLobby {
    onCreateTacticsLobby {
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
export const onUpdateTacticsLobby = /* GraphQL */ `
  subscription OnUpdateTacticsLobby {
    onUpdateTacticsLobby {
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
export const onDeleteTacticsLobby = /* GraphQL */ `
  subscription OnDeleteTacticsLobby {
    onDeleteTacticsLobby {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateGameRound = /* GraphQL */ `
  subscription OnCreateGameRound {
    onCreateGameRound {
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
export const onUpdateGameRound = /* GraphQL */ `
  subscription OnUpdateGameRound {
    onUpdateGameRound {
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
export const onDeleteGameRound = /* GraphQL */ `
  subscription OnDeleteGameRound {
    onDeleteGameRound {
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
