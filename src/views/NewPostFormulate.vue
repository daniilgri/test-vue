<template>
  <NewPostForm />
</template>

<script lang="ts">
import Vue from "vue";
import NewPostForm from "../components/related/NewPostFormulate/NewPostForm.vue";

export default Vue.extend({
  name: "NewPostFormulate",
  components: { NewPostForm }
});
</script>
