<template>
  <section id="hero" class="w-full h-full pb-24 pt-6 md:pt-10 lg:pt-12">
    <div
      class="container mx-auto grid grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-x-14"
    >
      <div class="col-span-2 md:col-span-1">
        <div class="w-full h-auto relative">
          <div
            :class="active_ambassador.color"
            class="absolute transition_image top-0 z-0 left-0 w-11/5 sm:w-3/5 h-full bg-opacity-10"
          ></div>

          <div
            class="h-full w-full relative z-10 py-4 sm:py-6 md:py-10 px-4 sm:px-8 md:px-12"
          >
            <section class="h-full relative mb-3">
              <div class="" style="height: 560px;">
                <img
                  :src="active_ambassador.picture"
                  alt=""
                  class="w-full md:w-auto h-full object-fill"
                />
              </div>

              <div
                class="absolute shadow-lg block w-5/6 sm:w-3/5 md:w-4/5 lg:w-3/5 -right-1 sm:-right-2 md:-right-6 -bottom-1 -sm:bottom-2 -md:bottom-6 bg-white p-4 rounded-lg"
              >
                <blockquote
                  class="text-xs font-thin sm:font-light md:font-normal text-cowry-dark text-opacity-80"
                >
                  {{ active_ambassador.quote }}
                </blockquote>

                <div class="flex justify-between items-center mt-4">
                  <span
                    class="text-xs sm:text-sm text-cowry-dark font-semibold text-opacity-80"
                  >
                    {{ active_ambassador.name }}
                  </span>

                  <a
                    :href="active_ambassador.link"
                    target="_blank"
                    class="text-xs sm:text-sm font-semibold text-cowry-main text-opacity-80 hover:text-opacity-100"
                  >
                    @{{ active_ambassador.cowrywise_handle }}
                  </a>
                </div>
              </div>
            </section>

            <section class="flex items-center space-x-4 mt-8">
              <div
                class="h-10 w-10 cursor-pointer relative"
                v-for="ambassador in ambassadors"
                :key="ambassador.name"
                @click="showAmbassador(ambassador)"
              >
                <span
                  :class="
                    ambassador.name === active_ambassador.name
                      ? 'bg-opacity-10  shadow-sm'
                      : ' bg-opacity-40'
                  "
                  class="block absolute top-0 left-0 w-full h-full bg-cowry-dark"
                >
                </span>

                <img
                  :src="ambassador.picture"
                  :alt="ambassador.name"
                  :title="ambassador.name"
                  class="w-full h-full object-fill rounded"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 px-4 sm:px-6 md:px-0">
        <div
          class="w-full h-full flex justify-center flex-col p-1 lg:p-3 lg:-mt-10"
        >
          <h2
            class="text-4xl sm:text-5xl lg:text-7xl text-cowry-dark font-semibold mb-2"
          >
            Put your <br />
            money to work.
          </h2>

          <span
            class="block text-sm lg:w-4/5 sm:text-base lg:text-lg text-cowry-dark text-opacity-60 font-medium"
          >
            Build discipline, access financial tools that steadily grow your
            finances.
          </span>

          <div
            class="mt-5 sm:mt-6 md:mt-8 lg:mt-14 sm:w-2/3 md:w-full xl:w-2/3"
          >
            <form
              class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 md:space-x-1 lg:space-x-4 relative items-stretch w-full mb-4"
            >
              <input
                type="email"
                class="block sm:flex flex-auto w-auto px-4 py-2 lg:py-3 lg:px-6 text-xs sm:text-sm lg:text-base font-medium text-cowry-gray bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Your email"
              />

              <button
                class="block sm:flex py-2 px-4 lg:py-3 lg:px-6 border rounded-md font-medium lg:font-semibold text-xs sm:text-sm lg:text-base bg-cowry-main text-cowry-light bg-opacity-80 hover:bg-opacity-100 shadow-md"
                type="button"
              >
                Start Investing
              </button>
            </form>
          </div>
        </div>
      </div>

      <p
        class="col-span-full uppercase -mt-4 mr-8 sm:mr-10 py-2 text-xs hidden sm:flex justify-end items-center text-cowry-dark text-opacity-80 font-normal"
      >
        <img
          class="h-3 md:h-4 w-3 md:w-4 mr-2 inline-flex"
          :src="require('~/assets/img/sec.png')"
          alt=""
        />

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
        cowrywise_handle: 'wuwu',
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

<style scoped>
.transition_image {
  color: rgba(255, 101, 1);
  animation: spin 8s linear ease-in-out;
}

@keyframes spin {
  0% {
    transform: scale(1, 1);
    transform: rotate(0deg);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
    transform: rotate(360deg);
  }
}
</style>
