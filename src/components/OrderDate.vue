<template>
  <span v-if="['restaurant', 'spa'].includes(order.orderType)"><strong>Datum:</strong> {{ formatOrderDate }}</span>
  <span v-else-if="order.orderType === 'living'"><strong>Datum:</strong> {{ formatOrderDate }}</span>
  <span v-else>{{ formatDate }}</span>
</template>

<script>
import { defineComponent } from "vue";

/**
 * @param {Date} date
 */
function getTimeString (date) {
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString() 
}

export default defineComponent({
  name: "OrderDate",

  props: ["order"],

  computed: {
      // Format an order date based on its orderType.
    formatOrderDate() {
      if (['restaurant', 'spa'].includes(this.order.orderType)) {
        return getTimeString(this.order.dateTime)
      } else if (this.order.orderType === 'living') {
        return this.order.arrivalDate.toLocaleDateString() + ' - ' + this.order.departureDate.toLocaleDateString()
      }

      return 'INVALID ORDER TYPE'
    },
  },
});
</script>
