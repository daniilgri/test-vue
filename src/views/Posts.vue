<template>
  <PostsList />
</template>

<script lang="ts">
import Vue from "vue";

import PostsList from "../components/related/Posts/PostsList.vue";

export default Vue.extend({
  name: "Posts",
  components: {
    PostsList
  }
});
</script>
