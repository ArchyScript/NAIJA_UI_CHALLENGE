<template>
  <section
    class="bg-image w-full h-full pt-20 pb-32 px-24 bg-cowry-light bg-opacity-30"
  >
    <div class="grid grid-cols-2 gap-x-16 xl:gap-x-20 h-full container mx-auto">
      <div class="w-full space-y-16 xl:space-y-20">
        <div class="flex-shrink-0 justify-self-center border">
          <img
            class="w-1/2 mx-auto object-right"
            :src="require('~/assets/img/getting-started/start-building.png')"
            alt=""
          />
        </div>
      </div>

      <div class="w-full">
        <div class="w-3/4">
          <h3 class="text-4xl text-cowry-dark font-semibold mb-14">
            Start building wealth in 5 minutes
          </h3>

          <div class="space-y-10">
            <div
              class=""
              v-for="(step, index) in steps"
              :key="`${step.title}_${index}`"
            >
              <h4
                class="flex items-center mb-3 text-2xl text-cowry-dark text-opacity-80 font-semibold"
              >
                <span class="mr-16"> {{ `0${+index + 1}` }}</span>
                <span> {{ step.title }} </span>
              </h4>

              <p
                :class="+index === 1 ? '' : 'border-l'"
                class="ml-3 pl-20 pt-2 pb-6 border-l text-xl border-opacity-50 break-words border-cowry-dark text-opacity-50 font-medium"
              >
                "{{ index }}"
                {{ step.description }}
                {{ typeof index }}
                {{ typeof +index }}
              </p>
            </div>
          </div>
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
          'Sign up for an account with your name, email and phone number.',
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
