<template>
  <section class="relative w-full h-auto py-20 pb-40 bg-cowry-main">
    <div class="z-20 container mx-auto">
      <div class="w-2/5 p-6 space-y-6">
        <h3 class="text-5xl text-white font-semibold mb-4">
          Keeping your money safe is our business.
        </h3>

        <span class="block text-xl text-white text-opacity-70 font-medium">
          Trust is our currency. We are committed to the security of your money
          and the protection of your account.
        </span>

        <p class="flex justify-between w-auto py-2">
          <a
            href="https://cowrywise.com/security"
            target="_blank"
            class="cursor-pointer select-none text-white text-sm py-1.5 px-2.5 uppercase text-opacity-80 hover:text-opacity-100 font-semibold"
          >
            Learn more
          </a>
        </p>
      </div>

      <section class="w-5/6 h-full p-6">
        <div class="grid grid-cols-2 gap-16">
          <div
            class="col-span-2 md:col-span-1"
            v-for="(security_measure, index) in security_measures"
            :key="`${security_measure.title}_${index}`"
          >
            <h4
              class="flex items-center mb-3 text-2xl text-white font-semibold"
            >
              <span class="mr-10 bg-white shadow-lg h-4 w-4 rounded-md"> </span>
              <span> {{ security_measure.title }} </span>
            </h4>

            <p
              class="ml-3 pl-10 pb-4 text-xl text-opacity-70 break-words text-cowry-light font-medium"
            >
              {{ security_measure.description }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div
      class="flex opacity-50 z-10 justify-end w-full h-full absolute bottom-0 right-0"
    >
      <img
        class="w-2/5 h-full mt-14 object-right"
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
.security_hero {
  background-image: url('assets/img/getting-started/stash.svg');
  background-repeat: no-repeat;
  object-fit: cover;
  object-position: right;
}
</style>
