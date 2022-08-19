<template>
  <div class="grid grid-cols-2">
    <div class="col-span-2 md:col-span-1 py-2">
      <h2 class="text-5xl text-cowry-dark font-bold mb-2">
        Jump right back in
      </h2>

      <span class="block text-cowry-gray font-semibold text-2xl">
        Sign in to continue
      </span>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="p-6 bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  layout: 'auth',
  head: {
    title: 'Login',
  },
})
</script>
