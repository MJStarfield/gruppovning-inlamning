<template>
  <div>
    <TitleHeading>Evenemang</TitleHeading>

    <FlexRow wrap="{true}" gap-y="2" gap-x="1" v-slot="slotProps">
      <CardElement
        v-for="event in sortedEventsByStartDate"
        v-bind:key="event.name"
        v-bind:caption="event.name"
        class="w-full lg:w-1/3"
        v-bind:class="slotProps.classes"
      >
        <BackgroundColor class="h-full" v-bind:color="hasEndedClass(event)">
          <FlexColumn gap="2" class="p-4">
            <strong>
              <span>Datum: </span>
              <span v-if="event.startDate">{{
                event.startDate.toDateString()
              }}</span>
              <span v-if="event.endDate">
                - {{ event.endDate.toDateString() }}</span
              ></strong
            >
            <p>{{ event.description }}</p>

            <FlexRow gap-x="2" gap-y="2" v-slot="slotProps">
              <i class="bi bi-alarm" v-bind:class="slotProps.classes"></i>
              <p>{{ formatDate(event) }}</p>
            </FlexRow>
          </FlexColumn>
        </BackgroundColor>
      </CardElement>
    </FlexRow>
  </div>
</template>

<script>
import CardElement from "@/components/CardElement.vue";
import TitleHeading from "@/components/Text/TitleHeading.vue";
import { defineComponent } from "vue";
import FlexRow from "@/components/Flex/FlexRow.vue";
import FlexColumn from "@/components/Flex/FlexColumn.vue";
import BackgroundColor from "@/components/Color/BackgroundColor.vue";
import { fromNow } from "@/scripts/helpers";

export default defineComponent({
  name: "EventPage",

  props: ["events"],

  components: {
    CardElement,
    TitleHeading,
    FlexRow,
    FlexColumn,
    BackgroundColor,
  },

  computed: {
    sortedEventsByStartDate() {
      const newArr = [...this.events];
      return newArr.sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
      );
    },
  },

  methods: {
    hasEndedClass(event) {
      return event.endDate
        ? new Date().getTime() - event.endDate.getTime() > 0
          ? "gray-300"
          : undefined
        : undefined;
    },

    /**
     * @param {{ startDate: Date, endDate: Date }} event
     */
    formatDate(event) {
      return fromNow(event.startDate, event.endDate);
    },
  },
});
</script>
