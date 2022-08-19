<template>
  <section id="hero" class="w-full h-full pb-24 pt-12">
    <div class="container mx-auto grid grid-cols-2 gap-x-16">
      <div class="col-span-2 md:col-span-1">
        <div class="w-full h-auto relative">
          <div
            :class="active_ambassador.color"
            class="absolute top-0 z-0 left-0 w-1/2 h-full bg-opacity-10"
          ></div>

          <div class="h-full w-full relative z-10 py-12 px-16">
            <section class="h-full relative mb-3">
              <div class="" style="height: 650px;">
                <img
                  :src="active_ambassador.picture"
                  alt=""
                  class="w-auto h-full object-fill"
                />
              </div>

              <div
                class="absolute shadow-md block w-3/5 -right-6 -bottom-6 bg-white py-4 px-6 rounded-lg"
              >
                <blockquote
                  class="text-xs sm:text-sm text-cowry-dark text-opacity-80"
                >
                  {{ active_ambassador.quote }}
                </blockquote>

                <div class="flex justify-between items-center mt-4">
                  <span
                    class="text-xs sm:text-sm text-cowry-dark font-semibold text-opacity-80"
                    >{{ active_ambassador.name }}</span
                  >

                  <a
                    :href="active_ambassador.link"
                    target="_blank"
                    class="text-xs sm:text-sm font-semibold text-cowry-main text-opacity-80 hover:text-opacity-100"
                    >@{{ active_ambassador.cowrywise_handle }}</a
                  >
                </div>
              </div>
            </section>

            <section class="flex items-center space-x-4 mt-10">
              <div
                class="h-16 w-16 cursor-pointer relative"
                v-for="ambassador in ambassadors"
                :key="ambassador.name"
                @click="showAmbassador(ambassador)"
              >
                <span
                  :class="
                    ambassador.name === active_ambassador.name
                      ? 'bg-opacity-10'
                      : ' bg-opacity-40'
                  "
                  class="block absolute top-0 left-0 w-full h-full bg-cowry-dark"
                >
                </span>
                <img
                  :src="ambassador.picture"
                  :alt="ambassador.name"
                  :title="ambassador.name"
                  class="w-full h-full object-fill"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1">
        <div class="w-full h-full flex justify-center flex-col p-4 -mt-10">
          <h2 class="text-7xl text-cowry-dark font-semibold mb-2">
            Put your <br />
            money to work.
          </h2>

          <span
            class="block text-xl text-cowry-dark text-opacity-70 font-semibold"
          >
            Build discipline, access financial tools that steadily grow your
            finances.
          </span>

          <div class="mt-16">
            <form
              class="flex space-x-3 relative flex-wrap items-stretch w-full sm:13/4 md:w-full lg:w-3/4 mb-4"
            >
              <input
                type="email"
                class="relative flex-auto px-4 py-2 md:py-3 md:px-6 text-base font-medium text-cowry-gray bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Your email"
              />

              <button
                class="py-2 px-4 md:py-3 md:px-6 border rounded-md font-medium md:font-semibold bg-cowry-main text-cowry-light bg-opacity-80 hover:bg-opacity-100 shadow-md"
                type="button"
              >
                Start Investing
              </button>
            </form>
          </div>
        </div>
      </div>

      <p
        class="col-span-full -mt-4 py-2 text-sm flex justify-end text-cowry-dark font-medium"
      >
        LICENSED BY THE SEC
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import Section from '../base/Section.vue'

export default {
  components: { Section },
  name: 'HomePageWelcome',
  setup() {
    const ambassadors = ref([
      {
        name: 'Wuraola F',
        quote: `I've become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there.`,
        cowrywise_handle: 'wuwu ',
        link: 'https://cowrywise.com/@wuwu',
        picture: require('~/assets/img/ambassadors/wura.jpg'),
        color: 'bg-red-500',
      },
      {
        name: 'Mayokun A',
        quote: `Cowrywise makes saving quite interesting and fun. My best part would be the fact that I can seamlessly invest my naira in dollars.`,
        cowrywise_handle: 'mhay',
        link: 'https://cowrywise.com/@mhay',
        picture: require('~/assets/img/ambassadors/mayokun.jpg'),
        color: 'bg-green-500',
      },
      {
        name: 'Olaitan O',
        quote: `I love how Cowrywise has made me think of saving part of any income I get. I immediately think of investing any money I get now.`,
        cowrywise_handle: 'thevideopilot',
        link: 'https://cowrywise.com/@thevideopilot',
        picture: require('~/assets/img/ambassadors/wande.jpg'),
        color: 'bg-blue-500',
      },
    ])
    const active_ambassador = ref(ambassadors.value[0])

    const showAmbassador = (ambassador: any) => {
      active_ambassador.value = ambassador
      console.log(ambassador)
    }

    return { ambassadors, active_ambassador, showAmbassador }
  },
}
</script>
