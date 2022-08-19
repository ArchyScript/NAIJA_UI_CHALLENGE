<template>
  <h1>
    <nuxt-link to="/">
      Home
    </nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'test',
  head: {
    title: 'Page not found',
  },
  setup() {
    return {}
  },
}
</script>
