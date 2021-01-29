import { Module } from "vuex";

import { RootState } from "./../types";
import { Posts } from "./types";

const initialState: Posts = {
  posts: [
    {
      id: 0,
      title: "The first post in this example",
      body:
        "Somebody ones told me the world is gonna throw me, I hated that and go away.",
      likes: 0
    }
  ]
};

export const posts: Module<Posts, RootState> = {
  namespaced: true,
  state: initialState
};
