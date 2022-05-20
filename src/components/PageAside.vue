<template>
  <div class="p-4 bg-gray-100 w-full h-full overflow-y-auto">
    <TitleHeading>Dina bokningar</TitleHeading>

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
        <DecorativeSeparator border="0.5" margin-y="2" class="mb-0"/>
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

export default defineComponent({
  name: "PageAside",

  data() {
    return {
      orders: store.state.order,
    };
  },

  components: {
    TitleHeading,
    FlexColumn,
    OrderDate,
    DecorativeSeparator,
  },
});
</script>
