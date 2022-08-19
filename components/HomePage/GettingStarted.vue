<template>
  <section class="">
    <div id="hero" class="w-full pb-24">
      <div class="grid grid-cols-2 gap-x-12 container mx-auto">
        <div class="h-36 w-full border">
          <div class="w-full h-full flex justify-center flex-col p-4">
            <h3 class="text-5xl text-cowry-dark font-semibold mb-2">
              Get financial freedom
            </h3>

            <span
              class="block text-xl text-cowry-dark text-opacity-70 font-semibold"
            >
              Plan towards your dream home, fund your kid's education, travel
              the world, all in one app.
            </span>
          </div>
        </div>
        <div class="h-64 w-full border"></div>
      </div>
    </div>

    <!-- <VTypical
      class="blink text-5xl"
      :steps="['Hello', 0, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></VTypical> -->
  </section>
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
