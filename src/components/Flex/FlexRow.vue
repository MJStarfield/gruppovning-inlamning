<template>
  <div v-bind:class="componentClass">
    <slot v-bind:classes="slotClass"></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexRow",

  props: ["items", "justify", "wrap", "gap", "gapX", "gapY"],

  computed: {
    componentClass() {
      let classes = ["flex", "flex-row"];

      if (this.wrap) classes.push("flex-wrap");

      if (this.items) classes.push("items-" + this.items);

      if (this.justify) classes.push("justify-" + this.justify);

      if (!this.gapX && !this.gapY && this.gap) {
        classes.push("gap-" + this.gap);
      } else {
        classes.push(`-mx-${this.gapX ?? "2"}`);
        classes.push(`-mb-${this.gapY ?? "2"}`);
      }

      return classes.join(" ");
    },
    slotClass() {
      return `px-${this.gapX ?? "2"} mb-${this.gapY ?? "2"}`;
    },
  },
});
</script>
