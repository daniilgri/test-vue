export interface NewPost {
  title: string;
  body: string;
}

export interface SinglePost extends NewPost {
  id: number;
  userId: number;
}

export interface PostsState {
  posts: SinglePost[];
  loading: boolean;
  error: string;
}
