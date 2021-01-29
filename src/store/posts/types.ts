export interface SinglePost {
  id: number;
  title: string;
  body: string;
  likes: number;
}

export interface Posts {
  posts: SinglePost[];
}
