<template>
  <FlexColumn gap="1">
    <FlexRow gap-x="2" gap-y="2" wrap="{true}" v-slot="slotProps">
      <CardElement
        src="./assets/Ivars.png"
        class="w-full lg:w-1/2"
        v-bind:class="slotProps.classes"
      />
      <div class="w-full lg:w-1/2" v-bind:class="slotProps.classes">
        <TitleHeading>Restaurant Ivars</TitleHeading>
        <FlexColumn gap="4">
          <p class="text-lg">
            Vår matfilosofi har alltid varit att ha bra råvaror. Vi gör våran
            egen bearnaisesås, alla andra såser och kryddsmör från grunden med
            omsorg. Vi har alltid hemlagat potatismos till våra mosrätter t.ex
            plankstek, fiskplanka och gratinerad gösfilé.
          </p>

          <p class="text-lg">Sedan 1983 har det varit en och samma ägare.</p>

          <p class="text-lg">
            Våran önskan är att du, gammal som ung ska känna dig välkommen till
            oss på Restaurant Ivars.
          </p>

          <SubHeading
            >Det finns <strong>{{ maxOrders - totalRestaurantBookings }}</strong> antal
            platser kvar att boka.</SubHeading
          >
          <a href="#menu"
            ><SubHeading
              class="font-bold text-emerald-500 hover:text-emerald-900"
              >Se säsongens meny nedan!</SubHeading
            ></a
          >
        </FlexColumn>
      </div>
    </FlexRow>

    <DecorativeSeparator />

    <SubHeading>Boka plats</SubHeading>

    <div>
      <FlexColumn gap="2" class="w-full lg:w-1/3">
        <label for="restaurantBookTime">Välj datum & tid:</label>
        <input
          type="datetime-local"
          id="restaurantBookTime"
          name="restaurantBookTime"
          class="px-0.5 rounded border-2 border-gray-200"
          v-on:click="setMinDate"
          v-model="dateTime"
        />
      </FlexColumn>
      <PrimaryButton
        bg-color="emerald-700"
        text-color="white"
        class="mt-3 font-bold"
        v-on:click="reservation"
        >Boka</PrimaryButton
      >
    </div>

    <DecorativeSeparator />

    <!-- Menu Navigation -->
    <SubHeading id="menu">Sommarens meny</SubHeading>

    <div class="border-2">
      <div class="flex justify-between mb-2">
        <NavigationItem
          text="Förrätter"
          v-bind:selected="menuCategory === 'appetizers'"
          v-on:click="menuCategory = 'appetizers'"
        ></NavigationItem>
        <NavigationItem
          text="Varmrätter"
          v-bind:selected="menuCategory === 'main'"
          v-on:click="menuCategory = 'main'"
        ></NavigationItem>
        <NavigationItem
          text="Desserter"
          v-bind:selected="menuCategory === 'desserts'"
          v-on:click="menuCategory = 'desserts'"
          class="border-r-2"
        ></NavigationItem>
      </div>
      <MenuItem
        v-for="(meal, index) in chosenCategory"
        v-bind:key="meal.name"
        v-bind:price="meal.price"
        v-bind:description="meal.description"
        v-bind:name="meal.name"
        v-bind:index="index"
      ></MenuItem>
    </div>
  </FlexColumn>
</template>

<script>
import { store } from "@/store.js";
import { meals } from "@/data/meals.js";
import NavigationItem from "@/components/Restaurant/NavigationItem.vue";
import MenuItem from "@/components/Restaurant/MenuItem.vue";
import TitleHeading from "@/components/Text/TitleHeading.vue";
import FlexColumn from "@/components/Flex/FlexColumn.vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import CardElement from "@/components/CardElement.vue";
import DecorativeSeparator from "@/components/Decoratives/DecorativeSeparator.vue";
import SubHeading from "@/components/Text/SubHeading.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantPage",

  data() {
    return {
      maxOrders: 12,
      dateTime: new Date().toISOString().substring(0, 16),
      menuCategory: "appetizers",
      meals: meals,
    };
  },

  computed: {
    chosenCategory() {
      return this.meals[this.menuCategory];
    },

    totalRestaurantBookings() {
      return (
        store.state.order.filter(
          (order) => order.orderType && order.orderType === "restaurant"
        ).length
      );
    },
  },

  methods: {
    reservation() {
      const obj = {
        orderType: "restaurant",
        dateTime: new Date(this.dateTime),
        id: Date.now(),
      };

      if (this.totalRestaurantBookings < this.maxOrders) {
        store.addToOrder(obj);
      }
    },
  },

  components: {
    NavigationItem,
    MenuItem,
    TitleHeading,
    FlexColumn,
    FlexRow,
    CardElement,
    DecorativeSeparator,
    SubHeading,
    PrimaryButton,
  },
});
</script>
