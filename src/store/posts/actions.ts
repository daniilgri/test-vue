import { ActionTree } from "vuex";
import axios from "axios";

import { RootState } from "./../types";
import { PostsState } from "./types";

import { PostsMutationsTypes } from "./mutations";

export const actions: ActionTree<PostsState, RootState> = {
  [PostsMutationsTypes.GET_POSTS_INITIAL_REQUESTED]({ commit }) {
    commit(PostsMutationsTypes.GET_POSTS_INITIAL_REQUESTED);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        commit(PostsMutationsTypes.GET_POSTS_INITIAL_SUCCEED, response.data)
      )
      .catch(error =>
        commit(PostsMutationsTypes.GET_POSTS_INITIAL_FAILED, error)
      );
  }
};
