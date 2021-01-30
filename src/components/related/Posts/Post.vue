<template>
  <div class="post">
    <h5 class="post__title">{{ values.title }}</h5>
    <p class="post__body">{{ values.body }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { SinglePost } from "../../../store/posts/types";

export default Vue.extend({
  name: "Post",
  props: {
    values: {
      type: Object as PropType<SinglePost>
    }
  }
});
</script>
