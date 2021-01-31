import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Posts from "../views/Posts.vue";
import NewPost from "../views/NewPost.vue";
import NewPostFormulate from "../views/NewPostFormulate.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/new",
    name: "NewPost",
    component: NewPost
  },
  {
    path: "/posts/formulate/new",
    name: "NewPostFormulate",
    component: NewPostFormulate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
