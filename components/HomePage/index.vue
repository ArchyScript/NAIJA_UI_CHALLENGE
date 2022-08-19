<template>
  <div>
    <Advert />
    <TopBarVue />
    <Welcome />
    <GettingStarted />
    <KeepingMoney />
    <Welcome />
    <Welcome />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Welcome from './Welcome.vue'
import TopBarVue from './TopBar.vue'
import Advert from './Advert.vue'
import GettingStarted from './GettingStarted.vue'
import KeepingMoney from './KeepingMoney.vue'

export default {
  name: 'IndexPage',
  head: {
    title: 'Plan, Save and Invest Online | Get high returns | Cowrywise',
  },
  components: {
    Advert,
    TopBarVue,
    Welcome,
    GettingStarted,
    KeepingMoney,
  },

  setup() {
    return {}
  },
}
</script>
