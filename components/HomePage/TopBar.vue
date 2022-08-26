<template>
  <nav
    id="navbar"
    :class="{ scrolled: !scrollShadowBoolean }"
    class="w-full bg-cowry-light z-40 top-0 mb-4 py-2 md:py-1.5 lg:py-2 xl:py-2.5"
  >
    <div
      class="w-full container px-4 sm:px-8 md:px-4 lg:px-6 mx-auto flex justify-between items-center"
    >
      <div
        class="w-full flex flex-1 relative md:pr-4 mx-auto items-center justify-between py-3 space-x-4 lg:space-x-8"
      >
        <div class="flex-shrink-0 flex items-center">
          <img
            :src="require('~/assets/img/cowrywise-full-logo.png')"
            class="h-4 sm:h-6 xl:h-7"
            alt="Cowrywise Logo"
          />
        </div>

        <div class="hidden md:flex flex-1 px-2 lg:px-6">
          <ul
            class="w-full h-auto flex items-center space-x-2 pb -4 lg:pb-0 lg:flex-row origin-top duration-300 space- y-3 lg:space-y-0"
          >
            <li
              class="relative flex-col"
              v-for="nav_link in nav_links"
              :key="nav_link.title"
            >
              <span
                :class="
                  active_dropdown_title === nav_link.title
                    ? 'text-cowry-dark'
                    : 'text-cowry-dark text-opacity-60'
                "
                class="flex items-center space-x-1 px-3 lg:px-4 py-2 text-cowry-dark hover:text-opacity-100 font-normal text-sm xl:text-base cursor-pointer"
                @click="openDropdown(nav_link)"
              >
                <span>
                  {{ nav_link.title }}
                </span>

                <span class="h-3">
                  <svg
                    v-if="active_dropdown_title !== nav_link.title"
                    class="h-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                    />
                  </svg>

                  <svg
                    v-if="active_dropdown_title === nav_link.title"
                    class="h-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                    />
                  </svg>
                </span>
              </span>

              <transition
                v-if="
                  nav_link.drop_down.section_1 &&
                  nav_link.drop_down.section_1.length >= 1
                "
              >
                <div
                  v-if="active_dropdown_title === nav_link.title"
                  :class="
                    nav_link.drop_down.section_2 &&
                    nav_link.drop_down.section_2.array_lists.length >= 1
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  "
                  class="w-full grid gap-10 p-6 absolute bg-white z-20 min-w-max mt-3 rounded-lg lg:rounded-xl border border-opacity-30 border-cowry-gray shadow-xl -ml-20"
                >
                  <!-- <span
                    class="hidden w-4 h-4 -mt-2 absolute bg-white z-10 ml-28 -translate-y-full rotate-45 border-2 border-opacity-30 border-cowry-gray"
                  ></span> -->

                  <div class="flex-col space-y-2">
                    <a
                      v-for="(section_1_drop_down, index) in nav_link.drop_down
                        .section_1"
                      :key="`${section_1_drop_down.title}_${index}`"
                      class="items-center p-2 flex flex-1 space-x-4 truncate text-cowry-dark hover:text-cowry-main text-opacity-80 cursor-pointer"
                      :href="section_1_drop_down.link"
                      target="_blank"
                    >
                      <div
                        class="flex-shrink-0 bg-cowry-light truncate h-8 p-1 sm:h-10 sm:w-10 inline-flex rounded-full border border-cowry-gray cursor-pointer"
                      >
                        <img
                          class="w-full h-full"
                          :src="require('~/assets/img/cowrywise-logo.png')"
                        />
                      </div>

                      <div class="truncate">
                        <span class="block text-base font-semibold truncate">
                          {{ section_1_drop_down.title }}
                        </span>

                        <span
                          class="block text-sm font-thin text-opacity-30 truncate"
                        >
                          {{ section_1_drop_down.description }}
                        </span>
                      </div>
                    </a>
                  </div>

                  <div
                    :class="
                      nav_link.drop_down.section_2 &&
                      nav_link.drop_down.section_2.array_lists.length >= 1
                        ? 'inline-block'
                        : 'hidden'
                    "
                    class="border-l border-cowry-gray border-opacity-20 pl-10"
                  >
                    <h4
                      class="block text-base mb-4 mt-2 font-semibold text-cowry-dark text-opacity-70 truncate"
                    >
                      {{ nav_link.drop_down.section_2.header }}
                    </h4>

                    <div class="flex-col space-y-1">
                      <a
                        v-for="(section_2_drop_dow_array_list,
                        index) in nav_link.drop_down.section_2.array_lists"
                        :key="`${section_2_drop_dow_array_list.title}_${index}`"
                        class="block text-sm cursor-pointer text-cowry-dark hover:text-cowry-main text-opacity-60 hover:text-opacity-100 font-medium truncate"
                        :href="section_2_drop_dow_array_list.link"
                      >
                        {{ section_2_drop_dow_array_list.title }}
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </li>

            <li class="relative flex-col">
              <a
                href="https://cowrywise.com/blog/"
                target="_blank"
                class="px-3 py-2 lg:px-4 text-cowry-dark text-opacity-60 hover:text-opacity-100 font-normal text-sm xl:text-base cursor-pointer"
              >
                Learn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="space-x-1 items-center justify-center hidden md:flex">
        <nuxt-link
          to="/auth/login"
          class="py-2 px-3 lg:py-2.5 lg:px-4 font-semibold text-sm text-cowry-main text-opacity-80 hover:text-opacity-100"
        >
          Log In
        </nuxt-link>

        <nuxt-link
          to="/auth/signup"
          class="py-2 px-3 lg:py-2.5 lg:px-4 font-semibold text-sm bg-cowry-main text-cowry-light bg-opacity-70 hover:bg-opacity-90 shadow-lg rounded-lg"
        >
          Sign Up For Free
        </nuxt-link>
      </div>

      <span class="flex md:hidden h-4 sm:h-5 cursor-pointer">
        <svg
          class="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
          />
        </svg>
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import { onBeforeMount, ref } from 'vue'
export default {
  name: 'BaseNavbar  ',
  setup() {
    const open = ref(false)
    const scrollShadowBoolean = ref(true)
    const active_dropdown_title = ref('')
    const nav_links = ref([
      {
        title: 'Personal',
        drop_down: {
          section_1: [
            {
              title: 'Plan',
              description: 'Access financial tools & guides',
              image: '',
              link: 'https://cowrywise.com/plan',
            },
            {
              title: 'Save',
              description: 'Earn better interests than your bank',
              image: '',
              link: 'https://cowrywise.com/save',
            },
            {
              title: 'Invest',
              description: 'Build a global portfolio in one app',
              image: '',
              link: 'https://cowrywise.com/mutual-funds',
            },
            {
              title: 'Get Statch',
              description: 'A digital wallet for everything',
              image: '',
              link: 'https://cowrywise.com/stash',
            },
          ],

          section_2: {
            header: 'Growth Tools',
            array_lists: [
              {
                title: 'Estimate your interest',
                link: 'https://cowrywise.com/interest-tool',
              },
              {
                title: 'Know your risk apettite',
                link: 'https://cowrywise.com/risk-assessment',
              },
            ],
          },
        },
      },
      {
        title: 'Business',
        drop_down: {
          section_1: [
            {
              title: 'Sprout',
              description: 'Put your business idle cash to work',
              image: '',
              link: 'https://cowrywise.com/sprout',
            },
          ],

          section_2: {
            header: '',
            array_lists: [],
          },
        },
      },
      {
        title: 'Developer',
        drop_down: {
          section_1: [
            {
              title: 'Embed',
              description: 'Offer investment services in your app',
              image: '',
              link: 'https://cowrywise.com/embed',
            },
            {
              title: 'Docs',
              description: 'Read how to integrate the Embed API',
              image: '',
              link: 'https://developers.cowrywise.com/',
            },
          ],

          section_2: {
            header: 'Connect',
            array_lists: [
              {
                title: 'Join Embed on Slack',
                link: 'https://embedbycowrywise.slack.com/',
              },
            ],
          },
        },
      },
      // {
      //   title: 'Learn',
      //   drop_down: {
      //     section_1: [],

      //     section_2: {
      //       header: '',
      //       array_lists: [],
      //     },
      //   },
      // },
    ])

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (scrollShadowBoolean.value) scrollShadowBoolean.value = false
      } else {
        if (!scrollShadowBoolean.value) scrollShadowBoolean.value = true
      }
    }

    const openDropdown = (active_nav_link: any) => {
      if (active_dropdown_title.value === active_nav_link.title) {
        return (active_dropdown_title.value = '')
      }

      active_dropdown_title.value = active_nav_link.title
    }

    window.addEventListener('scroll', () => handleScroll())

    onBeforeMount(() => {
      handleScroll()
    })

    return {
      scrollShadowBoolean,
      open,
      active_dropdown_title,
      nav_links,
      openDropdown,
    }
  },
}
</script>

<style scoped>
nav.scrolled {
  @apply sticky shadow-md  transition-transform;
}
</style>
