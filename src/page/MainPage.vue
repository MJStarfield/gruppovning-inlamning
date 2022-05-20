<template>
  <FlexColumn gap="3" items="center" justify="center">
    <FlexRow wrap="true" class="w-full" gap-x="4" gap-y="4" v-slot="slotProps">
      <CardElement
        src="https://static-cdn.sr.se/images/105/7115f0db-e879-4206-b442-54fbe9679a9c.jpg"
        caption="Boka boende"
        class="w-full lg:w-1/3 hover:cursor-pointer"
        v-bind:class="slotProps.classes"
        v-on:click="onPageButtonClick('living')"
      />
      <CardElement
        src="./assets/Ivars.png"
        caption="Boka restaurantplats"
        class="w-full lg:w-1/3 hover:cursor-pointer"
        v-bind:class="slotProps.classes"
        v-on:click="onPageButtonClick('restaurant')"
      />
      <CardElement
        src="./assets/spa1.jpg"
        caption="Boka spa"
        class="w-full lg:w-1/3 hover:cursor-pointer"
        v-bind:class="slotProps.classes"
        v-on:click="onPageButtonClick('spa')"
      />
    </FlexRow>

    <FlexRow gap="8" justify="center" wrap="true" class="w-full">
      <CardElement
        src="./assets/motala.jpg"
        caption="Information"
        class="w-full lg:w-5/12 hover:cursor-pointer"
        v-on:click="onPageButtonClick('information')"
      />
      <CardElement
        src="./assets/discgolf.png"
        caption="Evenemang"
        class="w-full lg:w-5/12 hover:cursor-pointer"
        v-on:click="onPageButtonClick('events')"
      />
    </FlexRow>
  </FlexColumn>
</template>

<script>
import { defineComponent } from "vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import CardElement from "@/components/CardElement.vue";
import FlexColumn from "@/components/Flex/FlexColumn.vue";

export default defineComponent({
  name: "MainPage",

  emits: ["newPage"],

  methods: {
    onPageButtonClick(page) {
      this.$emit("newPage", page);
    },
  },

  computed: {},

  components: {
    FlexRow,
    CardElement,
    FlexColumn,
  },
});
</script>
