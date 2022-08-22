<template>
  <div>
    <AdvertVue />
    <HomeTopBarVue />
    <WelcomeVue />
    <GettingStartedVue />
    <ResgitrationStepsVue />
    <KeepingMoneyVue />
    <WelcomeVue />
    <WelcomeVue />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import WelcomeVue from './Welcome.vue'
import HomeTopBarVue from './HomeTopBar.vue'
import AdvertVue from './Advert.vue'
import GettingStartedVue from './GettingStarted.vue'
import ResgitrationStepsVue from './ResgitrationSteps.vue'
import KeepingMoneyVue from './KeepingMoney.vue'

export default {
  name: 'IndexPage',
  head: {
    title: 'Plan, Save and Invest Online | Get high returns | Cowrywise',
  },
  components: {
    AdvertVue,
    HomeTopBarVue,
    WelcomeVue,
    GettingStartedVue,
    ResgitrationStepsVue,
    KeepingMoneyVue,
  },

  setup() {
    return {}
  },
}
</script>
