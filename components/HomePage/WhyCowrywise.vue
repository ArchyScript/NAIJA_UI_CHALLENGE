<template>
  <section class="container w-full h-auto py-20 pb-40">
    <div
      class="p-4 mb-4 sm:mb-6 md:mb-10 lg:bottom-12 space-y-2 sm:space-y-4 md:space-y-4"
    >
      <h3
        class="text-cowry-dark text-sm md:text-base uppercase font-semibold mb-4"
      >
        WHY COWRYWISE?
      </h3>

      <transition>
        <span
          class="text-cowry-dark text-opacity-70 space-x-0 sm:space-x-4 text-2xl flex-col sm:flex-row sm:text-3xl md:text-4xl flex sm:items-center font-bold"
        >
          <span class="bounce-enter-active text-cowry-dark text-opacity-70">
            {{ current_q_and_a.question }}
          </span>

          <span class="bounce-enter-active text-cowry-dark text-opacity-100">
            {{ current_q_and_a.answer }}
          </span>
        </span>
      </transition>
    </div>

    <div class="p-6">
      <div
        class="grid grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 sm:space-y-10 md:space-y-0"
      >
        <div
          class="col-span-2 md:col-span-1 shadow-md rounded-lg p-3 sm:p-4 md:p-8 lg:p-10"
          v-for="(app_download, index) in app_downloads"
          :key="`${app_download.name}_${index}`"
        >
          <div class="flex justify-between items-center pb-3 sm:pb-4 md:pb-6">
            <span class="flex items-center">
              <span
                class="flex items-center text-cowry-dark text-opacity-70 text-2xl sm:text-3xl md:text-4xl font-semibold"
              >
                {{ app_download.rating }}/
                <span class="text-cowry-gray text-sm sm:text-base lg:text-lg">
                  5
                </span>
              </span>

              <span
                class="inline-flex space-x-1 sm:space-x-2 ml-1 sm:ml-2 py-0.5 sm:py-1.5 px-2 sm:px-3"
              >
                <span
                  class="h-4 w-4 text-yellow-600"
                  v-for="x in app_download.rating"
                  :key="x"
                >
                  <svg
                    class="h-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                    />
                  </svg>
                </span>
              </span>
            </span>

            <a
              class="flex items-center space-x-3 py-1 px-2 sm:py-1 sm:px-4 rounded-md bg-cowry-dark"
              href="https://cwry.se/app"
            >
              <span
                class="h-5 md:h-7 lg:h-6 md:p-1 lg:p-0 inline-flex text-white"
              >
                <svg
                  v-if="app_download.name === 'Google'"
                  class="h-full fill-current"
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

              <span class="hidden sm:flex md:hidden lg:flex flex-col">
                <span
                  v-if="app_download.name === 'Google'"
                  class="block text-xs font-thin text-cowry-light text-opacity-70"
                >
                  Get it on
                </span>

                <span
                  v-if="app_download.name === 'Apple'"
                  class="block text-xs font-thin text-cowry-light text-opacity-70"
                >
                  Download on the
                </span>

                <span class="block text-xs text-cowry-light font-medium">
                  {{ app_download.title }}
                </span>
              </span>
            </a>
          </div>

          <h4
            class="flex items-center mb-2 text-xl text-cowry-dark text-opacity-80 font-semibold"
          >
            <span> {{ app_download.title }} </span>
          </h4>

          <p
            class="mb-2 text-xs sm:text-sm md:text-base text-cowry-dark break-words text-opacity-80 font-medium"
          >
            {{ app_download.review }}
          </p>

          <p
            class="flex justify-between w-auto mt-3 sm:mt-4 md:mt-6 mb-2 sm:mb-3 md:mb-0"
          >
            <a
              :href="app_download.link"
              class="cursor-pointer flex items-center space-x-2 text-cowry-main uppercase rounded-md text-xs pr-3 pl-1 font-medium"
            >
              <span>
                download now
              </span>

              <span class="h-2 sm:h-3 font-thin">
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

        <div
          class="col-span-full grid items-center grid-cols-2 gap-y-7 sm:gap-y-10 md:gap-y-0 md:gap-x-12 lg:gap-x-14 xl:gap-20 bg-cowry-main shadow-2xl p-3 sm:p-10 md:p-14 lg:p-20 mt-20 rounded-lg sm:rounded-xl md:rounded-2xl shadow-cowry-main"
        >
          <h4
            class="text-2xl sm:text-3xl md:text-4xl flex flex-col justify-center space-y-3 text-cowry-light font-semibold col-span-2 md:col-span-1"
          >
            <span class="block">Sign up for free.</span>
            <span class="block">Start investing today. </span>
          </h4>

          <div class="col-span-2 md:col-span-1 sm:w-1/2 md:w-full">
            <form
              class="flex flex-col lg:flex-row space-x-0 lg:space-x-2 relative bg-cowry-light bg-opacity-40 rounded-lg items-stretch w-full p-0 lg:p-1"
            >
              <input
                type="email"
                class="block lg:flex py-2 px-3 sm:py-2.5 sm:px-4 w-auto bg-transparent text-cowry-light placeholder-cowry-light placeholder-opacity-70 font-medium text-opacity-90 focus:text-opacity-100 outline-none"
                placeholder="Your email"
              />

              <button
                class="py-2 px-3 sm:py-2.5 lg:px-4 block lg:inline-flex flex-auto w-full sm:w-auto font-semibold text-xs sm:text-sm bg-cowry-light rounded-lg text-cowry-dark bg-opacity-80 hover:bg-opacity-100 shadow-md"
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
import { onBeforeMount, ref } from 'vue'
import VTypical from 'vue-typical'

export default {
  name: 'Security',
  components: { VTypical },
  setup() {
    const app_downloads = ref([
      {
        name: 'Google',
        title: 'Play store',
        rating: 5,
        link: 'https://cwry.se/app',
        review:
          '“User interface is fantastic, deposits and withdrawals flawless and fast. I wish I had discovered this years ago, would have been a millionaire by now” - Obiora, Nov 2021',
      },
      {
        name: 'Apple',
        title: 'App store',
        rating: 5,
        link: 'https://cwry.se/app',
        review:
          "“I just don't know what to say about this app all i know is that it's awesome, it's been 2 years plus and I haven't had a reason to complain.” - Henrietta, December 2021",
      },
    ])
    const question_and_answers = ref([
      {
        question: 'Got SEC licence?',
        answer: 'Yup!',
      },
      {
        question: 'Saving Charges?',
        answer: 'Nope.',
      },
      {
        question: 'Great Interest Rates?',
        answer: 'Confam.',
      },
      {
        question: 'Maintenance Fees?',
        answer: 'No.',
      },

      {
        question: ' Convinced?',
        answer: 'Sign up now.',
      },
    ])

    const current_q_and_a = ref(question_and_answers.value[0])

    const toggleQuestionsAndAnswers = async () => {
      let current_q_and_a_index = 1

      function displayHello() {
        current_q_and_a.value.question =
          question_and_answers.value[current_q_and_a_index].question
        current_q_and_a.value.answer =
          question_and_answers.value[current_q_and_a_index].answer

        current_q_and_a_index++

        if (current_q_and_a_index >= question_and_answers.value.length)
          current_q_and_a_index = 0
      }

      setInterval(displayHello, 1800)
    }

    onBeforeMount(() => toggleQuestionsAndAnswers())

    return {
      app_downloads,
      current_q_and_a,
    }
  },
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: opacity(0);
  }
  50% {
    transform: opacity(0.5);
  }
  100% {
    transform: opacity(1);
  }
}
</style>
