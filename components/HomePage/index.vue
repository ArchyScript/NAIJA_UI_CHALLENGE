<template>
  <div>
    <AdvertVue />
    <TopBarVue />
    <WelcomeVue />
    <GettingStartedVue />
    <ResgitrationStepsVue />
    <SecurityVue />
    <WhyCowrywiseVue />
    <FooterVue />

    <!-- <div class="perk">
            <span
              class="perk__question"
              style="
                transform: translate(0px, 50px) scale(1.02, 1.02);
                opacity: 0;
              "
              >Convinced?</span
            ><a
              href="https://cwry.se/app"
              class="perk__answer perk__link"
              style="
                transform: translate(0px, 50px) scale(1.06, 1.06);
                opacity: 0;
              "
              >Sign up now.</a
            >
          </div> -->
    <!-- <VTypical
            class="text_animation text-cowry-dark text-opacity-70"
            :steps="[
              'Got SEC licence?',
              1500,
              'Saving Charges?',
              1500,
              'Great Interest Rates?',
              2000,
              'Maintenance Fees?',
              2000,
              'Convinced?',
              2000,
            ]"
            :loop="Infinity"
            wrapper="span"
          ></VTypical>

          <VTypical
            class="text_animation text-cowry-dark text-opacity-95"
            :steps="[
              'Yup!',
              2000,
              'Nope.',
              2000,
              'Confam.',
              2000,
              'No.',
              2000,
              'Sign up now',
              2000,
            ]"
            :loop="Infinity"
            wrapper="span"
          ></VTypical> -->
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import AdvertVue from './Advert.vue'
import WelcomeVue from './Welcome.vue'
import TopBarVue from './TopBar.vue'
import GettingStartedVue from './GettingStarted.vue'
import ResgitrationStepsVue from './ResgitrationSteps.vue'
import SecurityVue from './Security.vue'
import WhyCowrywiseVue from './WhyCowrywise.vue'
import FooterVue from './Footer.vue'

export default {
  name: 'IndexPage',
  head: {
    title: 'Plan, Save and Invest Online | Get high returns | Cowrywise',
  },
  components: {
    AdvertVue,
    TopBarVue,
    WelcomeVue,
    GettingStartedVue,
    ResgitrationStepsVue,
    SecurityVue,
    WhyCowrywiseVue,
    FooterVue,
  },

  setup() {
    return {}
  },
}
</script>
