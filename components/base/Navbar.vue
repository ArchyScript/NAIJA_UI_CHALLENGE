<template>
  <nav
    id="navbar"
    class="w-full container text-neutral-800 mx-auto sticky z-40 top-0 shadow-xl"
  >
    <div
      class="w-full flex relative px-8 mx-auto items-center justify-between py-4 space-x-2"
    >
      <div
        class="bg-green-500 flex-shrink-0 flex flex-row items-center justify-between"
      >
        <img
          :src="require('~/assets/img/odc_logo.jpg')"
          class="h-20 sm:h-24 xl:h-28"
          alt="ODC Logo"
        />
      </div>

      <div
        class="flex-1 flex justify-center bg-red-500 border-indigo-900 space-x-4 xl:space-x-8"
      >
        <ul
          class="w-full h-auto flex flex-gr ow items-center justify-center pb-4 lg:pb-0 lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <li
            class="relative group"
            v-for="nav_link in nav_links"
            :key="nav_link.title"
          >
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="openDropdown(nav_link)"
            >
              <span>
                {{ nav_link.title }}
              </span>
            </button>

            <transition
              v-if="nav_link.drop_down && nav_link.drop_down.length >= 1"
              name="transform-fade-down"
            >
              <ul
                v-if="active_dropdown_title === nav_link.title"
                class="flex lg:absolute flex-col max-w-42 py-1 l rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li
                  class="relative group"
                  v-for="nav_link in nav_links"
                  :key="nav_link.title"
                >
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >{{ nav_link.title }}</a
                  >
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>

      <div class="space-x-3 flex items-center justify-center">
        <base-button
          class="px-8 xl:px-10 py-3 mt-2 text-gradient border border-[#0c66ee]"
        >
          Login
        </base-button>
        <base-button
          class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
        >
          Sign Up
        </base-button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'BaseNavbar',
  setup() {
    const open = ref(false)
    const nav_links = ref([
      {
        title: 'Home',
        route: '/',
        // drop_down: [{ title: '' }, { title: '' }, { title: '' }, { title: '' }],
      },
      {
        title: 'Cryptocurrency',
        route: '/cryptocurrency',
        drop_down: [
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
        ],
      },
      {
        title: 'Products',
        route: '/products',
        drop_down: [
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
        ],
      },
      {
        title: 'Watchlist',
        route: '',
        drop_down: [
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
        ],
      },
      {
        title: 'NFT',
        drop_down: [
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
        ],
      },
      {
        title: 'Portfolio',
        drop_down: [
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
          { title: '', icon: '' },
        ],
      },
    ])

    const active_dropdown_title = ref('')

    const openDropdown = (active_nav_link: any) => {
      if (active_dropdown_title.value === active_nav_link.title) {
        return (active_dropdown_title.value = '')
      }

      active_dropdown_title.value = active_nav_link.title
    }

    return {
      open,
      active_dropdown_title,
      nav_links,
      openDropdown,
    }
  },
}
</script>
