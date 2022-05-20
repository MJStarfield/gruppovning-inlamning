<template>
  <div id="fullContainer">
    <TitleHeading>Spa</TitleHeading>
    <p class="text-lg">
      I Motala Camping spa parlor är vi skickliga på att få bort värken efter
      den långa vandringen.
    </p>

    <DecorativeSeparator />

    <SubHeading>Boka spa-plats</SubHeading>

    <FlexRow gap="4" items="center" justify="center" class="m-4">
      <label for="SpaDateTime" class="px-2">Välj datum & tid:</label>
      <input
        type="datetime-local"
        id="SpaDateTime"
        name="SpaDateTime"
        class="px-0.5 rounded border-2 border-gray-200"
        v-on:click="setMinDate"
        v-model="dateTime"
      />
      <PrimaryButton
        v-if="dateTime !== '' && treatmentType !== ''"
        bg-color="emerald-700"
        text-color="white"
        class="font-bold"
        v-on:click="reservation"
        >Boka</PrimaryButton
      >
      <PrimaryButton v-else bg-color="gray-500"
        >Välj {{ dateTime === "" ? "tid" : "behandlingstyp" }}</PrimaryButton
      >
    </FlexRow>

    <p v-if="treatmentType !== ''" class="text-center text-lg">
      Vald behandling: {{ treatmentType }} - {{ price }} SEK
    </p>

    <p v-else class="text-center text-lg">
      Välj behandlingstyp genom att klicka på någon av rutorna nedan:
    </p>

    <DecorativeSeparator />

    <FlexColumn gap="4">
      <FlexRow wrap="{true}" gap-x="2" gap-y="4" v-slot="slotProps">
        <CardElement
          v-for="option in spaOptions"
          v-bind:key="option.name"
          v-bind:caption="option.name"
          v-on:click="setTreatment(option)"
          v-bind:src="option.image"
          class="w-full md:w-1/2 cursor-pointer"
          v-bind:class="slotProps.classes"
        >
          <p class="p-4 text-xl lg:text-lg">{{ option.description }}</p>
          <p class="p-4 text-xl text-center bg-emerald-700 text-white">
            {{ option.price }} SEK
          </p>
        </CardElement>
      </FlexRow>

      <!-- Debug test -->
      <p v-for="item in testArray" v-bind:key="item.name">
        Datum: {{ item.date }} Behandling: {{ item.treatment }}
      </p>
    </FlexColumn>
  </div>
</template>

<script>
import { store } from "@/store.js";
import spaOptions from "../data/spaoptions";

import { defineComponent } from "vue";

import TitleHeading from "@/components/Text/TitleHeading.vue";
import CardElement from "@/components/CardElement.vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import FlexColumn from "@/components/Flex/FlexColumn.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import DecorativeSeparator from "@/components/Decoratives/DecorativeSeparator.vue";
import SubHeading from "@/components/Text/SubHeading.vue";
import { toTop } from "@/scripts/helpers";
// import SubHeading from "@/components/Text/SubHeading.vue";

export default defineComponent({
  name: "SpaPage",

  data() {
    return {
      testArray: [],
      dateTime: new Date().toISOString().substring(0, 16),
      treatmentType: "",
      price: 0,
      spaOptions: spaOptions,
    };
  },

  methods: {
    reservation() {
      const obj = {
        orderType: "spa",
        name: this.treatmentType,
        dateTime: new Date(this.dateTime),
        price: this.price,
        id: Date.now(),
      };

      if (this.dateTime != "" && this.treatmentType != "") {
        store.addToOrder(obj);
      }

      this.dateTime = "";
      this.treatmentType = "";
      this.price = 0;
    },

    setMinDate() {
      const input = document.getElementById("SpaDateTime");
      input.min = new Date().toISOString().substring(0, 16);
    },

    setTreatment(option) {
      this.treatmentType = option.name;
      this.price = option.price;
      this.toTop();
    },

    toTop: toTop
  },

  components: {
    TitleHeading,
    CardElement,
    FlexRow,
    FlexColumn,
    PrimaryButton,
    DecorativeSeparator,
    SubHeading,
  },
});
</script>
