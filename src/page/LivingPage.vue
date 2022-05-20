<template>
  <div>
    <TitleHeading>Boka boende</TitleHeading>
    <div v-if="type === ''">
      <p class="mb-4 text-lg">
        I Motala Camping har vi flertal boende alternativ för bokning, välj
        nedan:
      </p>
      <FlexRow wrap="{true}" gap-x="2" gap-y="4" v-slot="slotProps">
        <CardElement
          v-on:click="type = 'tent'"
          src="./assets/familjeTent.jpg"
          caption="Tält"
          class="w-full lg:w-1/3 hover:cursor-pointer"
          v-bind:class="slotProps.classes"
        />
        <CardElement
          v-on:click="type = 'trailer'"
          src="https://static-cdn.sr.se/images/105/7115f0db-e879-4206-b442-54fbe9679a9c.jpg"
          caption="Husvagnsplatser"
          class="w-full lg:w-1/3 hover:cursor-pointer"
          v-bind:class="slotProps.classes"
        />
        <CardElement
          v-on:click="type = 'cabin'"
          src="https://savsjo.se/images/18.475318a016a916da59c5768/1558016568758/(2)%20(2)%20(2)%202.jpg"
          caption="Stugor"
          class="w-full lg:w-1/3 hover:cursor-pointer"
          v-bind:class="slotProps.classes"
        />
      </FlexRow>
    </div>
    <div v-else>
      <!-- GO BACK BUTTON -->
      <PrimaryButton v-on:click="type = ''" bg-color="emerald-700" class="mb-4"
        >Tillbaka</PrimaryButton
      >

      <!-- Choose arrivalDate, leavingDate -->
      <FlexRow gap="2" items="center" wrap="{true}" class="mb-4">
        <label for="arrivalDate">Välj ankomstdatum:</label>
        <input
          type="date"
          id="arrivalDate"
          name="arrivalDate"
          class="rounded border-2 border-gray-200"
          v-model="arrivalDate"
        />
        <label for="departureDate">Välj avfärdsdatum:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          class="rounded border-2 border-gray-200"
          v-model="departureDate"
        />
        <PrimaryButton
          v-if="arrivalDate !== '' && departureDate !== '' && orderItem !== ''"
          v-on:click="reservation()"
          bg-color="emerald-900"
          >Boka {{ orderItem.name }}, {{ orderItem.price }} / per dag
        </PrimaryButton>
        <PrimaryButton
          v-else
          bg-color="gray-500"
          >Välj {{ (arrivalDate === "" || departureDate === "") ? "tid" : "val nedan" }}
        </PrimaryButton>
      </FlexRow>

      <!-- V-FOR -->
      <FlexRow wrap="{true}" gap-x="2" gap-y="4" v-slot="slotProps">
        <CardElement
          v-for="item in sortedFilteredLivingOptions"
          v-bind:key="item.id"
          v-bind:src="item.image"
          v-bind:caption="item.name"
          class="w-full md:w-1/2 lg:w-1/3"
          v-bind:class="slotProps.classes"
        >
          <BackgroundColor
            v-bind:color="isLivingBooked(item.id) ? 'gray-300' : 'transparent'"
          >
            <FlexColumn items="center" class="p-4" gap="2">
              <p>{{ item.description }}</p>
              <PrimaryButton
                v-if="!isLivingBooked(item.id)"
                v-on:click="prepareOrder(item)"
                bg-color="emerald-900"
                >Välj för att boka, {{ item.price }} SEK / dag</PrimaryButton
              >
              <PrimaryButton v-else bg-color="gray-500">Bokad!</PrimaryButton>
            </FlexColumn>
          </BackgroundColor>
        </CardElement>
      </FlexRow>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";
import livingOptions from "../data/livingoptions";

import { defineComponent } from "vue";

import CardElement from "@/components/CardElement.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import TitleHeading from "@/components/Text/TitleHeading.vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import FlexColumn from "@/components/Flex/FlexColumn.vue";

import { sortByPropertyName, toTop } from "../scripts/helpers";
import BackgroundColor from "@/components/Color/BackgroundColor.vue";

export default defineComponent({
  name: "LivingPage",

  data() {
    return {
      livingOptions: livingOptions,
      type: "",
      arrivalDate: new Date().toLocaleDateString(),
      departureDate: new Date().toLocaleDateString(),
      /**
     * @type {{ type: string, id: string, name: string, price: number }} orderItem
     */
      orderItem: "",
    };
  },

  emits: ["reservation"],

  methods: {
    prepareOrder(item) {
      this.orderItem = item;
      toTop();
    },

    
    reservation() {
      const obj = {
        orderType: "living",
        type: this.orderItem.type,
        id: this.orderItem.id,
        price: this.orderItem.price,
        name: this.orderItem.name,
        arrivalDate: new Date(this.arrivalDate),
        departureDate: new Date(this.departureDate),
      };

      store.addToOrder(obj);

      this.orderItem = ''
      this.arrivalDate = ''
      this.departureDate = ''
    },

    isLivingBooked(id) {
      return store.state.order.some(
        (order) => order.orderType === "living" && order.id === id
      );
    },
  },

  computed: {
    filteredLivingOptions() {
      return this.livingOptions.filter((item) => item.type === this.type);
    },

    sortedFilteredLivingOptions() {
      return sortByPropertyName(this.filteredLivingOptions);
    },
  },

  components: {
    CardElement,
    PrimaryButton,
    TitleHeading,
    FlexRow,
    FlexColumn,
    BackgroundColor,
  },
});
</script>
