<template>
  <hr v-bind:class="computedClass" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DecorativeSeparator",

  props: ["color", "border", "marginY"],

  computed: {
    computedClass() {
      return `my-${this.marginY ?? "4"} border-${this.border ?? "2"} border-${
        this.color ?? "emerald-200"
      } rounded-lg`;
    },
  },
});
</script>
