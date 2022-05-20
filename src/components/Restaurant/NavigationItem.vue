<template>
  <button
    class="flex-1 border-2 border-r-0 p-2 lg:p-4 lg:text-xl border-red-900 hover:bg-red-900 hover:text-white text-md hover:transition-color hover:bg-opacity-75 hover:border-opacity-0 ease-in-out duration-300"
    v-bind:class="computedClasses"
  >
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationItem",

  props: ["text", "selected"],

  computed: {
    computedClasses() {
      return {
        "bg-red-900 text-white": this.selected,
        "text-red-900": !this.selected,
      };
    },
  },
});
</script>
