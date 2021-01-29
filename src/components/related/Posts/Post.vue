<template>
  <div class="post">
    <h5 class="post__title">{{ values.title }}</h5>
    <p class="post__body">{{ values.body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Post",
  props: {
    values: Object
  }
});
</script>
