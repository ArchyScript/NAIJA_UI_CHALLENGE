<template>
  <section
    class="bg-image w-full h-full pt-20 pb-32 bg-cowry-light bg-opacity-30"
  >
    <div class="grid grid-cols-2 gap-x-16 xl:gap-x-20 h-full container mx-auto">
      <div class="w-full">
        <div class="flex-shrink-0 justify-self-center">
          <img
            class="w-3/5 mx-auto object-right"
            :src="require('~/assets/img/getting-started/start-building.png')"
            alt=""
          />
        </div>
      </div>

      <div class="w-full">
        <div class="pl-10">
          <h3 class="text-4xl text-cowry-dark font-semibold mb-10">
            Start building wealth in 5 minutes
          </h3>

          <div class="space-y-7">
            <div
              class=""
              v-for="(step, index) in steps"
              :key="`${step.title}_${index}`"
            >
              <h4 class="flex items-center mb-3 text-2xl font-semibold">
                <span class="text-cowry-main text-opacity-90 mr-16">
                  {{ `0${+index + 1}` }}</span
                >
                <span class="text-cowry-dark text-opacity-80">
                  {{ step.title }}
                </span>
              </h4>

              <p
                :class="+index === 2 ? '' : 'border-l'"
                class="ml-3 pl-20 pt-1 pb-4 text-lg border-opacity-50 break-words border-cowry-main text-cowry-dark text-opacity-80 font-medium"
              >
                {{ step.description }}
              </p>
            </div>
          </div>

          <p class="flex justify-between w-auto mt-8">
            <nuxt-link
              to="/auth/signup"
              class="cursor-pointer bg-cowry-main capitalize rounded-md bg-opacity-100 hover:bg-opacity-90 text-cowry-light select-none text-base py-2 px-4 lg:py-2.5 lg:px-6 font-semibold shadow-sm"
            >
              sign up now
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'IndexPage',
  setup() {
    const steps = ref([
      {
        title: 'Create an account',
        description:
          ' Sign up for an account with your name, email and phone number.',
      },
      {
        title: 'Add a payment method',
        description:
          'Using your debit card, bank account, USSD, QR Code, setup your first plan.',
      },
      {
        title: 'Watch your money grow',
        description:
          'Sit back, relax & let your money work for you all day, everyday.',
      },
    ])

    return { steps }
  },
}
</script>

<style scoped>
.bg-image {
  /* background: url('~/assets/img/getting-started/stocks.svg'); */
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
