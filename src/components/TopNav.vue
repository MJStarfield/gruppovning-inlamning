<template>
  <BackgroundColor color="emerald-800">
    <FlexRow gap="2">
      <!-- Living, Restaurant, Massage, Information -->
      <PrimaryButton
        bg-color="transparent"
        v-on:click="onPageButtonClick('living')"
        >Boende</PrimaryButton
      >
      <PrimaryButton
        bg-color="transparent"
        v-on:click="onPageButtonClick('restaurant')"
        >Restaurant</PrimaryButton
      >
      <PrimaryButton
        bg-color="transparent"
        v-on:click="onPageButtonClick('spa')"
        >Spa</PrimaryButton
      >
      <PrimaryButton
        bg-color="transparent"
        v-on:click="onPageButtonClick('information')"
        >Information</PrimaryButton
      >
      <PrimaryButton
        bg-color="transparent"
        v-on:click="onPageButtonClick('events')"
        >Evenemang</PrimaryButton
      >
    </FlexRow>
  </BackgroundColor>
</template>

<script>
import { defineComponent } from "vue";
import FlexRow from "./Flex/FlexRow.vue";
import PrimaryButton from "./PrimaryButton.vue";
import BackgroundColor from "./Color/BackgroundColor.vue";

export default defineComponent({
  name: "TopNav",

  emits: ["newPage"],

  methods: {
    onPageButtonClick(page) {
      this.$emit("newPage", page);
    },
  },

  components: {
    FlexRow,
    PrimaryButton,
    BackgroundColor,
  },
});
</script>
