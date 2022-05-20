<template>
  <footer
    class="p-4 bg-emerald-900 text-white transition-all h-28 hover:h-48 overflow-hidden"
  >
    <FlexRow class="justify-between">
      <div class="flex flex-row gap-2 w-1/3">
        <div class="text-sm">
          <p>
            <strong>Kommande evenemang:</strong> {{ nextEvent.name }},
            {{ nextEvent.dateStr }}
          </p>
          <p><strong>Bokningar:</strong> {{ order.length }}</p>
          <p>
            <strong>Restaurantplatser:</strong>
            {{ remainingRestaurantOrders }} kvar
          </p>
        </div>
      </div>
      <p class="px-2 text-lg font-bold text-center w-1/3">
        Copyright &copy; - "Motala Camping" Grupp 5
        <br><span class="text-sm">Michel Stjärnfelt, Johanna Uppa, Karar Al-Remahy</span>
      </p>
      <div class="w-1/3">
        <div
          style="height: 160px; display: inline-block; overflow: hidden"
          class="w-full"
        >
          <iframe
            style="position: relative; top: -59px; border: none"
            src="https://www.google.com/maps/d/u/0/embed?mid=1tdvG7RXirjsgN81Uk3rAckBrq5Oqw4St&ehbc=2E312F"
            width="100%"
            height="220"
          ></iframe>
        </div>
      </div>
    </FlexRow>
  </footer>
</template>

<script>
import { store } from "@/store.js";
import { fromNow } from "@/scripts/helpers";
import { defineComponent } from "vue";
import FlexRow from "./Flex/FlexRow.vue";

export default defineComponent({
  data() {
    return {
      order: store.state.order,
    };
  },

  props: ["events"],

  computed: {
    /**
     * Work with "this.events"
     * 1. Sort onstartDate
     * 2. Filter away everything that's already done, with endDate
     * 3. Return the first element.
     */
    nextEvent() {
      // Step 1
      /** @type Array<{ startDate: Date, endDate: Date }> */
      let newArr = [...this.events];

      newArr.sort(
        (eventA, eventB) =>
          eventA.startDate.getTime() - eventB.startDate.getTime()
      );

      // Step 2
      newArr = newArr
        .filter((event) => event.endDate)
        .filter((event) => event.endDate.getTime() > new Date().getTime());

      // Step 3
      const event = newArr[0];

      return {
        ...event,
        dateStr: fromNow(event.startDate, event.endDate).toLowerCase(),
      };
    },

    remainingRestaurantOrders() {
      return (
        12 -
        this.order.filter((order) => order.orderType === "restaurant").length
      );
    },
  },

  components: { FlexRow },
});
</script>
