/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTacticsLobbyInput = {
  id?: string | null,
  name: string,
  tacticsLobbyGameId?: string | null,
};

export type ModelTacticsLobbyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTacticsLobbyConditionInput | null > | null,
  or?: Array< ModelTacticsLobbyConditionInput | null > | null,
  not?: ModelTacticsLobbyConditionInput | null,
  tacticsLobbyGameId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type TacticsLobby = {
  __typename: "TacticsLobby",
  id: string,
  name: string,
  game?: Game | null,
  createdAt: string,
  updatedAt: string,
  tacticsLobbyGameId?: string | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  title: string,
  teamSize: number,
  rounds?: ModelGameRoundConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGameRoundConnection = {
  __typename: "ModelGameRoundConnection",
  items:  Array<GameRound | null >,
  nextToken?: string | null,
};

export type GameRound = {
  __typename: "GameRound",
  id: string,
  createdAt: string,
  updatedAt: string,
  gameRoundsId?: string | null,
};

export type UpdateTacticsLobbyInput = {
  id: string,
  name?: string | null,
  tacticsLobbyGameId?: string | null,
};

export type DeleteTacticsLobbyInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  title: string,
  teamSize: number,
};

export type ModelGameConditionInput = {
  title?: ModelStringInput | null,
  teamSize?: ModelIntInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGameInput = {
  id: string,
  title?: string | null,
  teamSize?: number | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateGameRoundInput = {
  id?: string | null,
  gameRoundsId?: string | null,
};

export type ModelGameRoundConditionInput = {
  and?: Array< ModelGameRoundConditionInput | null > | null,
  or?: Array< ModelGameRoundConditionInput | null > | null,
  not?: ModelGameRoundConditionInput | null,
  gameRoundsId?: ModelIDInput | null,
};

export type UpdateGameRoundInput = {
  id: string,
  gameRoundsId?: string | null,
};

export type DeleteGameRoundInput = {
  id: string,
};

export type ModelTacticsLobbyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTacticsLobbyFilterInput | null > | null,
  or?: Array< ModelTacticsLobbyFilterInput | null > | null,
  not?: ModelTacticsLobbyFilterInput | null,
  tacticsLobbyGameId?: ModelIDInput | null,
};

export type ModelTacticsLobbyConnection = {
  __typename: "ModelTacticsLobbyConnection",
  items:  Array<TacticsLobby | null >,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  teamSize?: ModelIntInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelGameRoundFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelGameRoundFilterInput | null > | null,
  or?: Array< ModelGameRoundFilterInput | null > | null,
  not?: ModelGameRoundFilterInput | null,
  gameRoundsId?: ModelIDInput | null,
};

export type CreateTacticsLobbyMutationVariables = {
  input: CreateTacticsLobbyInput,
  condition?: ModelTacticsLobbyConditionInput | null,
};

export type CreateTacticsLobbyMutation = {
  createTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type UpdateTacticsLobbyMutationVariables = {
  input: UpdateTacticsLobbyInput,
  condition?: ModelTacticsLobbyConditionInput | null,
};

export type UpdateTacticsLobbyMutation = {
  updateTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type DeleteTacticsLobbyMutationVariables = {
  input: DeleteTacticsLobbyInput,
  condition?: ModelTacticsLobbyConditionInput | null,
};

export type DeleteTacticsLobbyMutation = {
  deleteTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameRoundMutationVariables = {
  input: CreateGameRoundInput,
  condition?: ModelGameRoundConditionInput | null,
};

export type CreateGameRoundMutation = {
  createGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type UpdateGameRoundMutationVariables = {
  input: UpdateGameRoundInput,
  condition?: ModelGameRoundConditionInput | null,
};

export type UpdateGameRoundMutation = {
  updateGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type DeleteGameRoundMutationVariables = {
  input: DeleteGameRoundInput,
  condition?: ModelGameRoundConditionInput | null,
};

export type DeleteGameRoundMutation = {
  deleteGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type GetTacticsLobbyQueryVariables = {
  id: string,
};

export type GetTacticsLobbyQuery = {
  getTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type ListTacticsLobbiesQueryVariables = {
  filter?: ModelTacticsLobbyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTacticsLobbiesQuery = {
  listTacticsLobbies?:  {
    __typename: "ModelTacticsLobbyConnection",
    items:  Array< {
      __typename: "TacticsLobby",
      id: string,
      name: string,
      game?:  {
        __typename: "Game",
        id: string,
        title: string,
        teamSize: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tacticsLobbyGameId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameRoundQueryVariables = {
  id: string,
};

export type GetGameRoundQuery = {
  getGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type ListGameRoundsQueryVariables = {
  filter?: ModelGameRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameRoundsQuery = {
  listGameRounds?:  {
    __typename: "ModelGameRoundConnection",
    items:  Array< {
      __typename: "GameRound",
      id: string,
      createdAt: string,
      updatedAt: string,
      gameRoundsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTacticsLobbySubscription = {
  onCreateTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type OnUpdateTacticsLobbySubscription = {
  onUpdateTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type OnDeleteTacticsLobbySubscription = {
  onDeleteTacticsLobby?:  {
    __typename: "TacticsLobby",
    id: string,
    name: string,
    game?:  {
      __typename: "Game",
      id: string,
      title: string,
      teamSize: number,
      rounds?:  {
        __typename: "ModelGameRoundConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tacticsLobbyGameId?: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    title: string,
    teamSize: number,
    rounds?:  {
      __typename: "ModelGameRoundConnection",
      items:  Array< {
        __typename: "GameRound",
        id: string,
        createdAt: string,
        updatedAt: string,
        gameRoundsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameRoundSubscription = {
  onCreateGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type OnUpdateGameRoundSubscription = {
  onUpdateGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};

export type OnDeleteGameRoundSubscription = {
  onDeleteGameRound?:  {
    __typename: "GameRound",
    id: string,
    createdAt: string,
    updatedAt: string,
    gameRoundsId?: string | null,
  } | null,
};
