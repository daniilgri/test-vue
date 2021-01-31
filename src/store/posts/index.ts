import { Module } from "vuex";

import { RootState } from "./../types";
import { PostsState } from "./types";

import { getters } from "./getters";
import { mutations } from "./mutations";

const initialState: PostsState = {
  posts: []
};

export const posts: Module<PostsState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations
};
