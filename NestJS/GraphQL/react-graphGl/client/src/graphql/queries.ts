import { gql } from "@apollo/client";
export const GET_USERS = gql`
  query {
    users {
      id
      username
      displayName
    }
  }
`;

// export const GET_USER = gql`
//   query  {
//     user(id:3) {
//       id
//       username
//       displayName
//     }
//   }
// `;
//this is hard code

export const GET_USER = gql`
  query ($id: ID) {
    user(id: $id) {
      id
      username
      displayName
    }
  }
`;
