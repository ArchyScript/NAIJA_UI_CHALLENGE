<template>
  <section class="relative w-full pt-12 pb-24 bg-cowry-main">
    <div class="container bg-cowry-main mx-auto">
      <div class="w-full sm:w-3/4 lg:w-1/2 p-6 space-y-4 mb-4">
        <h3
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
        >
          Keeping your money safe is our business.
        </h3>

        <span
          class="block text-sm sm:text-base lg:text-lg text-cowry-light text-opacity-90 font-medium"
        >
          Trust is our currency. We are committed to the security of your money
          and the protection of your account.
        </span>

        <p class="flex">
          <a
            href="https://cowrywise.com/security"
            target="_blank"
            class="flex cursor-pointer items-center space-x-2 text-cowry-light text-xs md:text-sm py-2 px-3 uppercase text-opacity-80 hover:text-opacity-100 font-semibold"
          >
            <span>
              Learn more
            </span>

            <span class="h-3">
              <svg
                class="h-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                />
              </svg>
            </span>
          </a>
        </p>
      </div>

      <section
        class="sw-full sm:w-5/6 md:w-full lg:w-5/6 xl:w-3/4 h-full p-4 sm:p-6"
      >
        <div class="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          <div
            class="col-span-2 md:col-span-1"
            v-for="(security_measure, index) in security_measures"
            :key="`${security_measure.title}_${index}`"
          >
            <h4
              class="flex items-center mb-1 text-lg sm:text-xl lg:text-2xl text-cowry-light font-semibold"
            >
              <span
                class="mr-6 sm:mr-8 md:mr-10 relative bg-cowry-light shadow-lg h-3 sm:h-4 w-3 sm:w-4 z-10 rounded-sm"
              >
                <span
                  class="absolute h-full w-full top-1 left-1 rounded-sm z-0 bg-cowry-dark bg-opacity-40"
                >
                </span>
              </span>

              <span> {{ security_measure.title }} </span>
            </h4>

            <p
              class="ml-3 pl-6 sm:pl-8 md:pl-10 pb-4 text-sm sm:text-base text-opacity-80 break-words text-cowry-light font-normal"
            >
              {{ security_measure.description }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div
      class="flex opacity-30 lg:opacity-40 z-10 w-2/5 h-full justify-end absolute bottom-0 right-0"
    >
      <img
        class="w-full h-full mt-14 object-right"
        :src="require('assets/img/getting-started/stash.svg')"
        alt=""
      />
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Security',
  setup() {
    const security_measures = ref([
      {
        title: 'Bank-grade Security',
        description:
          'We are PCI-DSS compliant to ensure security of your data electronically. We also provide you with an option to set up 2FA for key transactions on your account. 2FA serves as an extra layer of protection to ensure the security of your account beyond just a username and password.',
      },
      {
        title: 'Assets Custody',
        description:
          'Our users’ financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law.',
      },
      {
        title: 'Regulatory Compliance',
        description:
          'Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.',
      },
      {
        title: 'Best-In-Class Assets',
        description:
          'All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.',
      },
    ])

    return {
      security_measures,
    }
  },
}
</script>

<style scoped>
.hero {
  background-image: url('assets/img/getting-started/stash.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
