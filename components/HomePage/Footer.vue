<template>
  <section class="container w-full h-auto py-20 pb-40">
    <div class="p-6 mb-12 space-y-6">
      <h3 class="text-2xl text-cowry-dark font-semibold mb-4">
        WHY COWRYWISE ?
      </h3>
      <span
        class="text-5xl flex items-center text-cowry-dark text-opacity-70 font-bold"
      >
        Convinced? Sign up now.
      </span>
    </div>

    <div class="p-6">
      <div class="grid grid-cols-2 gap-16">
        <div
          class="col-span-2 md:col-span-1 shadow-xl rounded-lg p-10"
          v-for="(app_download, index) in app_downloads"
          :key="`${app_download.name}_${index}`"
        >
          <div class="flex justify-between items-center pb-6">
            <span class="flex items-center mb-3 text-cowry-dark font-semibold">
              <span class="text-cowry-gray text-4xl font-semibold">
                {{ app_download.rating }} /</span
              >
              <span class="text-cowry-dark text-xl font-semibold"> 5 </span>
            </span>

            <span
              class="flex items-center space-x-2 py-2 px-3.5 rounded-md bg-cowry-dark"
            >
              <span class="h-10 inline-flex text-white">
                <svg
                  v-if="app_download.name === 'Google'"
                  class="h-full fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  />
                </svg>

                <svg
                  v-if="app_download.name === 'Apple'"
                  class="h-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </span>

              <span class="flex flex-col gap-y-1">
                <span class="block text-xs font-thin text-white text-opacity-70"
                  >Get it on
                </span>

                <span
                  class="block text-white font-semibold font-blacktext-xl"
                  >{{ app_download.title }}</span
                >
              </span>
            </span>
          </div>

          <h4
            class="flex items-center mb-3 text-2xl text-cowry-dark text-opacity-80 font-semibold"
          >
            <span> {{ app_download.title }} </span>
          </h4>

          <p
            class="mb-3 text-xl border-opacity-50 break-words border-cowry-main text-opacity-80 font-medium"
          >
            {{ app_download.review }}
          </p>

          <p class="flex justify-between w-auto mt-8">
            <a
              :href="app_download.link"
              class="cursor-pointer text-cowry-main uppercase rounded-md text-base py-2 px-4 lg:py-2.5 lg:px-6 font-medium shadow"
            >
              download now
            </a>
          </p>
        </div>

        <div class="col-span-full grid-cols-2 gap-20">
          <h4 class="text-4xl text-white font-bold">
            <span>Sign up for free.</span>
            <span>Start investing today.</span>
          </h4>

          <div>
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
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import VTypical from 'vue-typical'

export default {
  name: 'Security',
  components: { VTypical },
  setup() {
    const app_downloads = ref([
      {
        title: 'Company',
        sub_links: [
          {
            title: 'About Us',
            link: 'https://cowrywise.com/about',
          },
          {
            title: 'Press',
            link: 'https://cowrywise.com/press',
          },
          {
            title: '',
            link: 'https://cowrywise.com/careers',
          },
          {
            title: 'Ambassadors',
            link: 'https://cowrywise.com/ambassadors',
          },
          {
            title: 'Privacy',
            link: 'https://cowrywise.com/privacy',
          },
          {
            title: 'Terms',
            link: 'https://cowrywise.com/terms',
          },
        ],
      },
      {
        title: 'Products',
        sub_links: [
          {
            title: 'Saving Plans',
            link: 'https://cowrywise.com/save',
          },
          {
            title: 'Investment Plans',
            link: 'https://cowrywise.com/invest',
          },
          {
            title: 'Mutual Funds',
            link: 'https://cowrywise.com/mutual-funds',
          },
          {
            title: 'Stash',
            link: 'https://cowrywise.com/stash',
          },
          {
            title: 'Embeded API',
            link: 'https://cowrywise.com/embed',
          },
          {
            title: 'Circles',
            link: 'https://cowrywise.com/circles/challenges',
          },
          {
            title: 'Halal',
            link: 'https://cowrywise.com/halal',
          },
          {
            title: 'Got a suggestion?',
            link:
              'https://coda.io/form/How-Can-We-Serve-you-Better_dMim094U2qO',
          },
        ],
      },
      {
        title: 'Resources',
        sub_links: [
          {
            title: 'Customer Stories',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Media',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'FAQs',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Security',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Estimate your Interest',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Plan Education',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Blog',
            link: 'https://cowrywise.com/testimonials',
          },
          {
            title: 'Help',
            link: 'http://help.cowrywise.com/',
          },
        ],
      },
      {
        title: '',
        sub_links: [
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
          {
            title: '',
            link: '',
          },
        ],
      },
    ])

    return {
      app_downloads,
    }
  },
}
</script>

<style scoped>
.text_animation {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
