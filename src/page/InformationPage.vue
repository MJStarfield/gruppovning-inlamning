<template>
  <TitleHeading>Information</TitleHeading>

  <p class="mb-4 text-xl lg:text-lg">
    Motala är en tätort i Östergötland samt centralort i Motala kommun i
    Östergötlands län. Staden ligger vid Göta kanal och Motala ström mellan
    sjöarna Vättern och Boren, och är Östergötlands tredje största stad.
  </p>

  <PrimaryButton
    bg-color="emerald-700"
    text-color="white"
    class="font-bold"
    v-on:click="openURLInNewTab('https://sv.wikipedia.com/wiki/Motala')"
    >Läs mer</PrimaryButton
  >

  <div
    style="height: 460px; display: inline-block; overflow: hidden"
    class="mt-4 w-full"
  >
    <iframe
      style="position: relative; top: -59px; border: none"
      src="https://www.google.com/maps/d/u/0/embed?mid=1tdvG7RXirjsgN81Uk3rAckBrq5Oqw4St&ehbc=2E312F"
      width="100%"
      height="520"
    ></iframe>
  </div>

  <DecorativeSeparator />

  <SubHeading>Aktiviter</SubHeading>
  <FlexRow wrap="{true}" gap-x="2" gap-y="4" v-slot="slotProps">
    <CardElement
      v-for="activity in activities"
      v-bind:key="activity.name"
      v-bind:caption="activity.name"
      v-bind:src="activity.image"
      class="w-full md:w-1/3"
      v-bind:class="slotProps.classes"
    >
      <p class="p-4 text-xl lg:text-lg">{{ activity.description }}</p>
    </CardElement>
  </FlexRow>

  <DecorativeSeparator />

  <SubHeading>Sevärdheter</SubHeading>

  <FlexRow wrap="{true}" gap-x="2" gap-y="4" v-slot="slotProps">
    <CardElement
      v-for="attraction in attractions"
      v-bind:key="attraction.name"
      v-bind:caption="attraction.name"
      v-bind:src="attraction.image"
      class="w-full md:w-1/2"
      v-bind:class="slotProps.classes"
    >
      <p class="p-4 text-xl lg:text-lg">{{ attraction.description }}</p>
    </CardElement>
  </FlexRow>
</template>

<script>
import attractions from "../data/attractions";
import activities from "../data/activities";
import { sortByPropertyName, openURLInNewTab } from "../scripts/helpers";

import { defineComponent } from "vue";

import TitleHeading from "@/components/Text/TitleHeading.vue";
import SubHeading from "@/components/Text/SubHeading.vue";
import CardElement from "@/components/CardElement.vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import DecorativeSeparator from "@/components/Decoratives/DecorativeSeparator.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default defineComponent({
  name: "InformationPage",

  components: {
    TitleHeading,
    SubHeading,
    CardElement,
    FlexRow,
    DecorativeSeparator,
    PrimaryButton,
  },

  computed: {
    attractions() {
      return sortByPropertyName(attractions);
    },

    activities() {
      return sortByPropertyName(activities);
    },
  },

  methods: {
    openURLInNewTab,
  },
});
</script>
