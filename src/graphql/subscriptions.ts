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
  subscription OnUpdateTacticsLobby {
    onUpdateTacticsLobby {
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
  subscription OnDeleteTacticsLobby {
    onDeleteTacticsLobby {
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
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateGameRound = /* GraphQL */ `
  subscription OnCreateGameRound {
    onCreateGameRound {
      id
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
      createdAt
      updatedAt
      gameRoundsId
    }
  }
`;
