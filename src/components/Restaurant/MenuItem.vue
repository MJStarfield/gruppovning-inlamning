<template>
  <div>
    <div class="flex items-center justify-between px-6 py-4">
      <a class="flex flex-1 flex-col">
        <div class="flex flex-row gap-2 items-center">
          <!-- <icon-info alt="Se mer information om rätten."></icon-info> -->
          <p class="text-2xl">{{ this.name }}</p>
        </div>
        <p class="text-lg">{{ this.description }}</p>
      </a>
      <div class="flex h-12 items-center gap-2 text-red-900">
        <p class="text-xl">{{ this.price }} SEK</p>
      </div>
    </div>
    <div class="px-4">
      <DecorativeSeparator color="red-900" />
    </div>
  </div>
</template>

<script>
import DecorativeSeparator from "../Decoratives/DecorativeSeparator.vue";
export default {
  props: ["name", "description", "price", "index"],
  components: { DecorativeSeparator },
};
</script>
