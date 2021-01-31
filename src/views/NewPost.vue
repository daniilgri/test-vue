<template>
  <NewPostForm />
</template>

<script lang="ts">
import Vue from "vue";
import NewPostForm from "../components/related/NewPost/NewPostForm.vue";

export default Vue.extend({
  name: "NewPost",
  components: { NewPostForm }
});
</script>
