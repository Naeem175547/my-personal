import { gql } from "@apollo/client";

export const NEW_POST = gql`
  subscription {
    newPost {
      id
      title
      content
      createdAt
    }
  }
`;
