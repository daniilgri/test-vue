import { MutationTree } from "vuex";

import { PostsState, NewPost } from "./types";

export enum PostsMutationsTypes {
  ADD_POST = "@POSTS/ADD_POST",
  GET_POSTS_INITIAL_REQUESTED = "@POSTS/GET_POSTS_INITIAL_REQUESTED",
  GET_POSTS_INITIAL_SUCCEED = "@POSTS/GET_POSTS_INITIAL_SUCCEED",
  GET_POSTS_INITIAL_FAILED = "@POSTS/GET_POSTS_INITIAL_FAILED"
}

export const mutations: MutationTree<PostsState> = {
  [PostsMutationsTypes.ADD_POST](state, payload: NewPost) {
    state.posts.push({
      ...payload,
      userId: 1,
      id: state.posts[state.posts.length - 1].id + 1
    });
  },
  [PostsMutationsTypes.GET_POSTS_INITIAL_REQUESTED](state) {
    console.log("mutation");
    state.loading = true;
  },
  [PostsMutationsTypes.GET_POSTS_INITIAL_SUCCEED](state, payload) {
    state.loading = false;
    console.log(payload);
  },
  [PostsMutationsTypes.GET_POSTS_INITIAL_FAILED](state, payload) {
    state.loading = false;
    console.log(payload);
  }
};
