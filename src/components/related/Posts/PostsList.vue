<template>
  <div>
    <div class="wrapper" v-for="post in posts" :key="post.id">
      <Post :values="post" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { PostsMutationsTypes } from "../../../store/posts/mutations";

import Post from "./Post.vue";

export default Vue.extend({
  name: "PostsList",
  components: {
    Post
  },
  computed: {
    ...mapGetters({
      getPosts: "posts/getPosts"
    }),
    ...mapState("posts", {
      posts: "posts"
    })
  },
  methods: {
    ...mapActions("posts", {
      getPostsInitial: PostsMutationsTypes.GET_POSTS_INITIAL_REQUESTED
    })
  },
  created() {
    this.getPostsInitial();
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 60%;
  margin: 0 auto;
  margin-top: 40px;
}
</style>
