// This file is manually maintained, feel free to edit.
import gql from 'graphql-tag';

export const getGameWithRounds = gql`
  query GetGameWithRounds($id: ID!) {
    getGame(id: $id) {
      id
      title
      teamSize
      rounds {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;