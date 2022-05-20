<template>
  <div class="p-4 bg-gray-100 w-full h-full overflow-y-auto">
    <TitleHeading>Dina bokningar</TitleHeading>
    <SubHeading>Total pris: {{calcTotalOrder}} SEK</SubHeading>

    <FlexColumn gap="4">
      <div v-for="order in orders" v-bind:key="order.id" class="w-full">
        <div class="flex flex-row items-center gap-4 w-full">
          <p class="flex flex-col">
            <strong
              >{{ order.orderType.toUpperCase() }}
              <span v-if="order.name">- {{ order.name }}</span></strong
            >
            <OrderDate v-bind:order="order" />
          </p>
          <p v-if="order.price" class="flex-1 text-right">
            <strong>{{ order.price }} SEK</strong>
          </p>
        </div>
        <DecorativeSeparator border="0.5" margin-y="2" class="mb-0" />
      </div>
    </FlexColumn>
  </div>
</template>

<script>
import { store } from "@/store.js";

import { defineComponent } from "vue";

import TitleHeading from "./Text/TitleHeading.vue";
import FlexColumn from "./Flex/FlexColumn.vue";
import OrderDate from "./OrderDate.vue";
import DecorativeSeparator from "./Decoratives/DecorativeSeparator.vue";
import SubHeading from "./Text/SubHeading.vue";

export default defineComponent({
  name: "PageAside",

  data() {
    return {
      orders: store.state.order,
    };
  },

  /**
   * Create a computed method, give it a name.
   * Inside the method, return this.orders but make it
   * reduce the price property, starting with 0.
   * Something to think about: .price doesn't exist sometimes,
   * which means you have to ask if it exists or not.
   * If it doesn't exist, then just add 0 otherwise run the calculation.
   * return reduce((result, current) => {
   *   if (___)
   *   ___
   *   return ___
   * }, 0)
   */

  computed: {
    calcTotalOrder() {
      return this.orders.reduce(
        (previousValue, currentValue) => previousValue + (currentValue.price || 0),
        0
      );
    },
  },

  components: {
    TitleHeading,
    FlexColumn,
    OrderDate,
    DecorativeSeparator,
    SubHeading,
  },
});
</script>
