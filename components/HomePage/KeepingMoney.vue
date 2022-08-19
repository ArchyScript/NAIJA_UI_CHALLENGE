<template>
  <div class="">
    <section id="hero" class="w-full pb-24">
      <div class="grid grid-cols-2 gap-10">
        <div class="h-36 w-full border"></div>
        <div class="h-64 w-full border"></div>
      </div>
    </section>

    <!-- <VTypical
      class="blink text-5xl"
      :steps="['Hello', 0, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></VTypical> -->
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import VTypical from 'vue-typical'

export default {
  name: 'IndexPage',
  components: { VTypical },
  setup() {
    return {}
  },
}
</script>
