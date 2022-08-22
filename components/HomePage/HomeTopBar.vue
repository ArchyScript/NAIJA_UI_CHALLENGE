<template>
  <nav
    id="navbar"
    :class="{ scrolled: !scrollShadowBoolean }"
    class="w-full bg-white z-40 top-0 mb-4 py-2"
  >
    <div class="w-full container mx-auto flex justify-between items-center">
      <div
        class="w-full flex flex-1 relative px-6 mx-auto items-center justify-between py-4 space-x-8"
      >
        <div class="flex-shrink-0 flex items-center">
          <img
            :src="require('~/assets/img/cowrywise-full-logo.png')"
            class="h-6 md:h-8 xl:h-9"
            alt="Cowrywise Logo"
          />
        </div>

        <div class="flex-1 px-8">
          <ul
            class="w-full h-auto flex items-center space-x-2 pb-4 lg:pb-0 lg:flex-row origin-top duration-300 space-y-3 lg:space-y-0"
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
                class="px-4 py-2 text-cowry-dark hover:text-opacity-100 font-semibold text-base cursor-pointer"
                @click="openDropdown(nav_link)"
              >
                {{ nav_link.title }}
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
                  class="w-full grid gap-10 p-6 absolute bg-white z-20 min-w-max mt-5 rounded-lg lg:rounded-xl border-2 border-opacity-30 border-cowry-gray shadow-md -ml-20"
                >
                  <span
                    class="hidden w-4 h-4 -mt-2 absolute bg-white z-10 ml-28 -translate-y-full rotate-45 border-2 border-opacity-30 border-cowry-gray"
                  ></span>

                  <div class="flex-col space-y-4">
                    <a
                      v-for="(section_1_drop_down, index) in nav_link.drop_down
                        .section_1"
                      :key="`${section_1_drop_down.title}_${index}`"
                      class="items-center p-2 mb-2 flex flex-1 space-x-4 truncate text-cowry-dark hover:text-cowry-main text-opacity-80 cursor-pointer"
                      :href="section_1_drop_down.link"
                      target="_blank"
                    >
                      <div
                        class="flex-shrink-0 bg-cowry-light truncate h-10 p-1 sm:h-12 sm:w-12 inline-flex rounded-full border border-cowry-gray cursor-pointer"
                      >
                        <img
                          class="w-full h-full"
                          :src="require('~/assets/img/cowrywise-logo.png')"
                        />
                      </div>

                      <div class="truncate">
                        <span class="block text-lg font-bold truncate mb-1">
                          {{ section_1_drop_down.title }}
                        </span>

                        <span
                          class="block text-base font-thin object-fill text-opacity-30 truncate"
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
                      class="block text-lg mb-4 font-semibold text-cowry-dark text-opacity-80 truncate"
                    >
                      {{ nav_link.drop_down.section_2.header }}
                    </h4>

                    <div class="flex-col space-y-2">
                      <a
                        v-for="(section_2_drop_dow_array_list,
                        index) in nav_link.drop_down.section_2.array_lists"
                        :key="`${section_2_drop_dow_array_list.title}_${index}`"
                        class="block text-base cursor-pointer hover:pl-2 text-cowry-dark hover:text-cowry-main text-opacity-60 hover:text-opacity-100 font-medium truncate"
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
                class="px-4 py-2 text-cowry-dark text-opacity-60 hover:text-opacity-100 font-semibold text-base cursor-pointer"
              >
                Learn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="space-x-1 flex items-center justify-center">
        <nuxt-link
          to="/auth/login"
          class="py-2 px-4 md:py-3 md:px-6 font-medium md:font-semibold text-cowry-main text-opacity-80 hover:text-opacity-100"
        >
          Log In
        </nuxt-link>

        <nuxt-link
          to="/auth/signup"
          class="py-2 px-4 md:py-3 md:px-6 border rounded-lg font-medium md:font-semibold bg-cowry-main text-cowry-light bg-opacity-80 hover:bg-opacity-100 shadow-md"
        >
          Sign Up For Free
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { onBeforeMount, ref } from 'vue'
export default {
  name: 'BaseNavbar',
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
        title: 'Business  ',
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
