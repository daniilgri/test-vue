<template>
  <div>
    <div class="wrapper" v-for="post in posts" :key="post.id">
      <Post :values="post" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "./Post.vue";

export default Vue.extend({
  name: "PostsList",
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
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
