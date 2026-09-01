export type GetPostsVariables = {
  page?: number;
  limit?: number;
};

export type Post = {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

export type PostsResponse = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

export type GetPostsResponse = {
  posts: PostsResponse;
};

export type GetPostVariables = {
  id: number;
};