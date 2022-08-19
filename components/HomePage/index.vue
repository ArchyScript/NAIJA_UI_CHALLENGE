<template>
  <div>
    <Welcome />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Welcome from './Welcome.vue'

export default {
  name: 'IndexPage',
  components: { Welcome },

  setup() {
    return {}
  },
}
</script>
