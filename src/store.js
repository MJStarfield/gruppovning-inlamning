import { reactive } from "vue";

export const store = reactive({
  state: {
    order: [],
  },
  addToOrder(order){
    this.state.order.push(order)
    console.log(this.state.order)
  },
});
