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
              initialCarState {
                car {
                  id
                  team
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
            }
            nextToken
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