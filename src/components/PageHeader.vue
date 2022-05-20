<template>
  <div class="flex justify-between p-4 items-center">
    <button class="flex items-center" v-on:click="onLogoClick('main')">
      <BackgroundColor color="emerald-700" class="p-4 text-white rounded-full">
        <svg
          class="mx-auto my-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 20 10 4"></path>
          <path d="m5 20 9-16"></path>
          <path d="M3 20h18"></path>
          <path d="m12 15-3 5"></path>
          <path d="m12 15 3 5"></path>
        </svg>
      </BackgroundColor>
      <h1 class="text-4xl p-4">Motala Camping</h1>
    </button>

    <FlexColumn class="px-4">
      <p class="text-center">{{ now }}</p>
      <p class="text-center text-lg">SMHI Motala</p>
      <div class="flex items-center">
        <!-- Get the right weatherLogo using Weather Symbol data from http://opendata.smhi.se/apidocs/metfcst/parameters.html -->
        <div class="flex text-4xl">
          <div class="flex flex-col items-center" v-if="weatherLogo <= 2">
            <i class="bi bi-brightness-high"></i>
          </div>
          <div class="flex flex-col items-center" v-else-if="weatherLogo <= 4">
            <i class="bi bi-cloud-sun"></i>
          </div>
          <div class="flex flex-col items-center" v-else-if="weatherLogo <= 6">
            <i class="bi bi-clouds"></i>
          </div>
          <div class="flex flex-col items-center" v-else-if="weatherLogo <= 7">
            <i class="bi bi-cloud-fog"></i>
          </div>
          <div class="flex flex-col items-center" v-else-if="weatherLogo === 8">
            <i class="bi bi-cloud-drizzle"></i>
          </div>
          <div class="flex flex-col items-center" v-else-if="weatherLogo <= 10">
            <i class="bi bi-cloud-rain-heavy"></i>
          </div>
          <div
            class="flex flex-col items-center"
            v-else-if="weatherLogo === 11"
          >
            <i class="bi bi-cloud-lightning-rain"></i>
          </div>
        </div>
        <p class="text-2xl px-2">{{ degrees }}°C</p>
      </div>
    </FlexColumn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import FlexColumn from "./Flex/FlexColumn.vue";
import BackgroundColor from "./Color/BackgroundColor.vue";

export default defineComponent({
  name: 'PageHeader',

  data() {
    return {
      degrees: 0,
      weatherLogo: 0,
      currentDate: "",
    };
  },

  computed: {
    now() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      return yyyy + '/' + mm + '/' + dd;
    },
  },

  created() {
    this.getWeatherFromApi();
  },

  emits: ["newPage"],

  methods: {
    onLogoClick(page) {
      this.$emit("newPage", page);
    },
    getWeatherFromApi() {
      //Motala coordinates: 15.047094, 58.538034
      fetch(
        "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15.047094/lat/58.538034/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // for loop running through all possible parameters
          for (let i = 0; i < 19; i++) {
            //Get the time variable from the api using the 't' value and setting it to the degrees variable
            if (data.timeSeries[1].parameters[i].name === "t") {
              this.degrees = data.timeSeries[1].parameters[i].values[0];
            }

            //Get the logo variable from the api using the 'Wsymb2' value and setting it to the weatherLogo variable
            if (data.timeSeries[1].parameters[i].name === "Wsymb2") {
              this.weatherLogo = data.timeSeries[1].parameters[i].values[0];
            }
          }
        });
    },
  },

  components: {
    FlexColumn,
    BackgroundColor,
  },
});
</script>
