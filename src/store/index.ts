import Vue from "vue";
import Vuex from "vuex";

import { RootState } from "./types";

import { posts } from "./posts";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== "production",
  modules: { posts }
});
