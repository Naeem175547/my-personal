import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";
import type { GetPostsVariables } from "../types/types";
import type { GetPostsResponse } from "../types/types";


export type Likes = {
  userId: number,
  postId: number
}
export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  likes: Likes[]
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  posts: Post[];
  key?: string
};



export type MeResponse = {
  me: User;
};

export type GetUsersResponse = {
  users: [User]
}

type GetPostResponse = {
  post: Post;
};

type GetPostVariables = {
  id: number;
};

export const GET_POSTS: TypedDocumentNode<
  GetPostsResponse,
  GetPostsVariables
> = gql`
  query GetPosts($page: Int, $limit: Int) {
    posts(page: $page, limit: $limit) {
      posts {
        id
        title
        content
        createdAt
        updatedAt
        userId
        likes{
        userId
        postId}
        user{
        id
        name
        username}
      }
      currentPage
      totalPages
      totalPosts
    }
  }
`;




export const Get_Post: TypedDocumentNode<GetPostResponse, GetPostVariables> = gql`
query($id:Int!){
post(id:$id){
id
title,
content,
createdAt,
userId
}}

`




export const ME: TypedDocumentNode<MeResponse> = gql`
  query {
    me {
      id
      name
      username
      email
      role
      key
      posts {
        id
        title
        content
        createdAt
        updatedAt
        userId
        
      }
    }
  }
`;



export const Get_Users: TypedDocumentNode<GetUsersResponse> = gql`
    query {
        users {
            id
            name
            username
            email
            role
            posts {
                id
                title
                content
                createdAt
                updatedAt
                userId
            }
        }
    }
`;



// export const GetLikes = gql`
//     query {
//         getLikes {
//             userId
//             postId
//         }
//     }
// `;

