<template>
  <button v-bind:class="componentClass">
    <BackgroundColor class="p-2 hover:bg-black hover:bg-opacity-25">
      <FlexRow items="center" gap="2">
        <slot />
      </FlexRow>
    </BackgroundColor>
  </button>
</template>

<script>
import { defineComponent } from "vue";
import BackgroundColor from "./Color/BackgroundColor.vue";
import FlexRow from "./Flex/FlexRow.vue";

export default defineComponent({
  name: "PrimaryButton",

  props: ["bgColor", "textColor"],
  computed: {
    componentClass() {
      const textColor = this.textColor ?? "white";
      return `text-${textColor} bg-${this.bgColor}`;
    },
  },

  components: { BackgroundColor, FlexRow },
});
</script>
