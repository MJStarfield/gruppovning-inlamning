<template>
  <div v-bind:class="computedClass">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackgroundColor",

  props: ["color"],

  computed: {
    computedClass() {
      return `bg-${this.color ?? 'transparent'}`;
    },
  },
});
</script>
