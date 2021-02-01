import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Posts from "../views/Posts.vue";

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
    component: () => import("../views/NewPost.vue")
  },
  {
    path: "/posts/formulate/new",
    name: "NewPostFormulate",
    component: () => import("../views/NewPostFormulate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
