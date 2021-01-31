<template>
  <form id="new-post" @submit.prevent="handleFormOnSubmit">
    <input type="text" name="title" v-model="title" />
    <textarea name="body" v-model="body"></textarea>
    <button type="submit">
      Publish
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

import { PostsMutationsTypes } from "../../../store/posts/mutations";

export default Vue.extend({
  name: "NewPostForm",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapMutations("posts", {
      addPost: PostsMutationsTypes.ADD_POST
    }),
    handleFormOnSubmit() {
      this.addPost({ title: this.title, body: this.body });
      this.title = "";
      this.body = "";
    }
  }
});
</script>
