<template>
  <PageHeader v-on:new-page="changePage"></PageHeader>
  <TopNav v-on:new-page="changePage"></TopNav>

  <FlexRow class="flex-1 overflow-hidden" gap="0">
    <div class="basis-3/4 p-8 overflow-y-auto overflow-x-hidden" id="container">
      <!-- Main -->
      <MainPage v-if="page === 'main'" v-on:new-page="changePage" />
      <InformationPage v-if="page === 'information'" />
      <LivingPage v-if="page === 'living'" v-on:reservation="addOrder" />
      <SpaPage v-if="page === 'spa'" v-on:reservation="addOrder" />
      <EventPage v-bind:events="events" v-if="page === 'events'" />
      <RestaurantPage v-if="page === 'restaurant'" />
    </div>

    <!-- Aside -->
    <div class="basis-1/4">
      <PageAside></PageAside>
    </div>
  </FlexRow>

  <!-- Footer -->
  <PageFooter v-bind:events="events" />
</template>

<script>
import events from "./data/events";

import { defineComponent } from "vue";

import MainPage from "./page/MainPage.vue";
import InformationPage from "./page/InformationPage.vue";
import LivingPage from "./page/LivingPage.vue";
import SpaPage from "./page/SpaPage.vue";
import EventPage from "./page/EventPage.vue";
import RestaurantPage from "./page/RestaurantPage.vue";

import FlexRow from "./components/Flex/FlexRow.vue";
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
import TopNav from "./components/TopNav.vue";
import PageAside from "./components/PageAside.vue";
import { toTop } from "./scripts/helpers";

export default defineComponent({
  name: "App",

  data() {
    return {
      orders: [],
      /** @type {'main' | 'living' | 'restaurant' | 'spa' | 'information' | 'events'} */
      page: "main",
      events: events,
    };
  },

  methods: {
    changePage(newPage) {
      toTop('auto')
      this.page = newPage;
    },

    addOrder(item) {
      this.orders.push(item);

      console.log(this.orders);
    },
  },

  components: {
    MainPage,
    InformationPage,
    LivingPage,
    SpaPage,
    EventPage,
    RestaurantPage,

    TopNav,
    PageHeader,
    PageFooter,
    FlexRow,
    PageAside,
  },
});
</script>

<style></style>
