<template>
  <div v-bind:class="computedClasses" class="self-stretch">
    <div
      class="flex flex-col border-2 rounded-lg ease-in-out duration-200 hover:shadow-xl hover:shadow-inner hover:shadow-gray-500 h-full w-full overflow-clip"
    >
      <div v-if="src" class="flex items-center justify-center flex-1">
        <img class="object-cover h-full w-full" v-bind:src="src" alt="" />
      </div>
      <div>
        <p v-if="caption" v-bind:class="computedCaptionClasses">{{ caption }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CardElement',

  props: ["src", "caption", "width", 'captionSize'],

  computed: {
    computedClasses() {
      return this.width ? `max-w-${this.width ?? 'lg'}` : ''
    },

    computedCaptionClasses() {
      return `text-center p-2 bg-emerald-700 text-white font-bold text-${this.captionSize ?? 'xl'}`
    }
  },
});
</script>

<style scoped></style>
