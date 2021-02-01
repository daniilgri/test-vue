import { Module } from "vuex";

import { RootState } from "./../types";
import { PostsState } from "./types";

import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const initialState: PostsState = {
  posts: [],
  error: "",
  loading: false
};

export const posts: Module<PostsState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
