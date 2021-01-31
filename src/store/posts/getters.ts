import { RootState } from "../types";
import { GetterTree } from "vuex";
import { PostsState, SinglePost } from "./types";

export const getters: GetterTree<PostsState, RootState> = {
  getPosts(state): SinglePost[] {
    return state.posts;
  }
};
