<template>
  <div
    class="flex-shrink-0 flex flex-row items-center justify-between pb-24 xl:pb-28 bg-white"
  >
    <img
      :src="require('~/assets/img/cowrywise-full-logo.png')"
      class="h-6 sm:h-8 xl:h-l0"
      alt="Cowrywise Logo"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthHeader',
  setup() {
    return {}
  },
}
</script>
