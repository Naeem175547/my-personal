import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";




type LoginResponse = {
  login: {
    accessToken: string;
  };
};

type LoginVariables = {
  username: string;
  password: string;
};




type PostInput = {
  title: string;
  content: string;
};

type CreatePostResponse = {
  createPost: boolean;
};

type CreatePostVariables = {
  userId: number;
  input: PostInput;
};






type DeletePostResponse = {
  removePostUser?: boolean;
  removePostAdmin?: boolean
};

type DeletePostVariables = {
  userId?: number;
  id: number;
};

type DeleteUserResponse = {
  deleteUser: boolean;
};

type DeleteUserVariables = {
  id: number;
};

type UpdateUserResponse = {
  updateUser: boolean;
};

type UpdateUserVariables = {
  id: number;
  input: {
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    role?: "ADMIN" | "USER";
  };
};

type RegisterResponse = {
  registerUser: boolean;
};

type RegisterVariables = {
  input: {
    name: string;
    username: string;
    password: string;
    email: string;
    role: "ADMIN" | "USER";
  };
};




export const Register_User: TypedDocumentNode<RegisterResponse, RegisterVariables> = gql`
  mutation ($input: UserCreateInput!) {
    registerUser(input: $input)
  }
`;




export const Login_User: TypedDocumentNode<
  LoginResponse,
  LoginVariables
> = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      id
    }
  }
`;

export const Delete_User: TypedDocumentNode<
  DeleteUserResponse,
  DeleteUserVariables
> = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;

export const Update_User: TypedDocumentNode<
  UpdateUserResponse,
  UpdateUserVariables
> = gql`
  mutation UpdateUser($id: Int!, $input: UserUpdateInput!) {
    updateUser(id: $id, input: $input)
  }
`;



export const Create_Post: TypedDocumentNode<
  CreatePostResponse,
  CreatePostVariables
> = gql`
    mutation CreatePost(
        $userId: Int!
        $input: CreatePostInput!
    ) {
        createPost(
            userId: $userId
            createPostInput: $input
        )
    }
`;

export const Delete_Post_By_User: TypedDocumentNode<
  DeletePostResponse,
  DeletePostVariables
> = gql`
  mutation DeletePostByUser($userId: Int!, $id: Int!) {
    removePostUser(userId: $userId, id: $id)
  }
`;

export const Delete_Post_By_Admin: TypedDocumentNode<DeletePostResponse, DeletePostVariables> = gql`
  mutation DeletePostByAdmin($id: Int!) {
    removePostAdmin(id: $id)
  }
`;

export const Update_Post_By_User = gql`
  mutation UpdatePostByUser(
    $userId: Int!
    $id: Int!
    $updatePostInput: UpdatePostInput!
  ) {
    updatePostUser(
      userId: $userId
      id: $id
      updatePostInput: $updatePostInput
    )
  }
`;

export const Update_Post_By_ADMIN = gql`
  mutation UpdatePostByAdmin(
    $id: Int!
    $updatePostInput: UpdatePostInput!
  ) {
    updatePostAdmin(
      id: $id
      updatePostInput: $updatePostInput
    )
  }
`;


export const like = gql
  `
mutation($user_id:Int!,$post_id:Int!){
 addLikes(user_id:$user_id,post_id:$post_id)

}

`

export const unlike = gql

  `
mutation($user_id:Int!,$post_id:Int!){
 removeLikes(user_id:$user_id,post_id:$post_id)

}

`

export const UPLOAD_FILE_URL = gql`
  mutation UploadFile($key: String!, $contentType: String!) {
    uploadFileUrl(
      key: $key
      contentType: $contentType
    ) {
      url
    }
  }
`;

export const GET_FILE_URL = gql`
  mutation GetFileURL($key: String!) {
    getFileUrl(
      key: $key
    ) {
      url
    }
  }
`;