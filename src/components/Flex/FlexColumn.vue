<template>
  <div v-bind:class="componentClass">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexColumn",

  props: ["items", "justify", "gap", "wrap"],

  computed: {
    componentClass() {
      let classes = ["flex", "flex-col"];

      if (this.gap) classes.push("gap-" + this.gap);

      if (this.wrap) classes.push("flex-wrap");

      if (this.items) classes.push("items-" + this.items);

      if (this.justify) classes.push("justify-" + this.justify);

      return classes.join(" ");
    },
  },
});
</script>
