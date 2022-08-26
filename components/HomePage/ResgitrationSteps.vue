<template>
  <section
    class="bg-image w-full h-full pt-20 pb-32 bg-cowry-light bg-opacity-30"
  >
    <div
      class="grid grid-cols-2 gap-x-10 xl:gap-x-20 gap-y-8 sm:gap-y-10 md:gap-y-0 h-full container mx-auto"
    >
      <div class="w-full col-span-2 md:col-span-1">
        <div class="flex-shrink-0 justify-self-center">
          <img
            class="w-3/5 sm:w-1/4 md:w-3/5 xl:w-2/5 mx-auto object-right"
            :src="require('~/assets/img/getting-started/start-building.png')"
            alt=""
          />
        </div>
      </div>

      <div class="w-full col-span-2 md:col-span-1 my-auto">
        <div class="px-4 sm:px-6 lg:pl-10">
          <h3
            class="text-2xl sm:text-3xl lg:text-4xl text-cowry-dark font-semibold mb-4 sm:mb-6 lg:mb-8"
          >
            Start building wealth in 5 minutes
          </h3>

          <div class="space-y-2 sm:space-y-3">
            <div
              class=""
              v-for="(step, index) in steps"
              :key="`${step.title}_${index}`"
            >
              <h4
                class="flex items-center mb-1 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
              >
                <span
                  class="text-cowry-main text-opacity-90 mr-4 sm:mr-8 md:mr-12 lg:mr-16"
                >
                  {{ `0${+index + 1}` }}</span
                >
                <span class="text-cowry-dark text-opacity-80">
                  {{ step.title }}
                </span>
              </h4>

              <p
                :class="+index === 2 ? '' : 'border-l'"
                class="ml-3 pl-6 sm:pl-10 md:pl-14 lg:pl-20 pt-1 pb-2 sm:pb-3 md:pb-4 text-xs sm:text-sm lg:text-base border-opacity-50 break-words border-cowry-main text-cowry-dark text-opacity-80 font-medium"
              >
                {{ step.description }}
              </p>
            </div>
          </div>

          <p class="flex justify-between w-auto mt-8">
            <nuxt-link
              to="/auth/signup"
              class="cursor-pointer bg-cowry-main capitalize rounded-md bg-opacity-100 hover:bg-opacity-90 text-cowry-light select-none text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4 lg:py-2.5 lg:px-6 font-semibold shadow-sm"
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
