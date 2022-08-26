<template>
  <section class="container mx-auto w-full px-4 sm:px-6 h-auto py-10 md:py-16">
    <div class="grid grid-cols-4 gap-x-4 gap-y-8 pb-16">
      <div
        class="col-span-4 sm:col-span-2 md:col-span-1"
        v-for="footer_nav_link in footer_nav_links"
        :key="footer_nav_link.title"
      >
        <h4 class="text-cowry-dark font-semibold text-base md:text-lg mb-5">
          {{ footer_nav_link.title }}
        </h4>

        <div class="flex flex-col space-y-3">
          <span
            v-for="footer_sub_link in footer_nav_link.sub_links"
            :key="footer_sub_link.title"
          >
            <a
              :href="footer_sub_link.link"
              class="text-cowry-dark text-sm text-opacity-70 hover:text-opacity-100"
            >
              {{ footer_sub_link.title }}
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="pt-4 sm:pt-6 md:pt-8 border-t">
      <div class="mb-16 flex space-x-4 sm:space-x-5">
        <a
          v-for="social in socials"
          :key="social.title"
          target="_blank"
          rel="noopener noreferrer"
          :title="social.title"
          :href="social.link"
        >
          <span class="h-5 inline-flex text-white">
            <svg
              v-show="social.title === 'Twitter'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>

            <svg
              v-show="social.title === 'Facebook'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </svg>

            <svg
              v-show="social.title === 'Whatsapp'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>

            <svg
              v-show="social.title === 'Telegram'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              />
            </svg>

            <svg
              v-show="social.title === 'Instagram'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>

            <svg
              v-show="social.title === 'Youtube'"
              class="h-full fill-current text-cowry-dark text-opacity-50 hover:text-opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
          </span>
        </a>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:items-center"
      >
        <div class="flex flex-col space-y-2">
          <span class="space-x-2">
            <span class="text-xs text-cowry-dark text-opacity-70 uppercase">
              ng
            </span>
            <span class="font-medium text-cowry-dark text-opacity-80">
              5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.
            </span>
          </span>

          <span class="space-x-2">
            <span class="text-xs text-cowry-dark text-opacity-70 uppercase">
              us
            </span>
            <span class="font-medium text-cowry-dark text-opacity-80">
              2261 Market Street #4817 San Francisco, CA 94114
            </span>
          </span>
        </div>

        <div class="mt-4 md:mt-0">
          <div
            class="flex w-max space-x-4 items-center shadow-sm md:shadow-md xl:shadow-lg py-2 px-4 border rounded-xl"
          >
            <img
              class="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 inline-flex"
              :src="require('~/assets/img/sec.png')"
              alt=""
            />

            <span class="flex self-start flex-col md:space-y-1">
              <span
                class="block text-base md:text-lg lg:text-xl font-semibold text-cowry-dark text-opacity-80"
              >
                Licensed by the SEC
              </span>

              <span
                class="block text-cowry-dark text-opacity-60 font-thin text-xs"
              >
                Fund Manager
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col text-xs md:text-sm space-y-3 sm:space-y-4 text-cowry-dark text-opacity-70 mt-16"
      >
        <p>
          Cowrywise Financial Technology Limited (“Cowrywise”) is a fund manager
          duly licensed by the Securities and Exchange Commission (SEC) of
          Nigeria.
        </p>

        <p>
          Our mutual funds are managed by our fund management partners and made
          available to our clients through our web and mobile applications. The
          fund manager for each mutual fund is disclosed on every mutual fund’s
          profile page. Any historical returns or expected returns are
          hypothetical in nature and may not reflect actual future performance.
          <a
            class="text-cowry-main text-opacity-80 hover:text-opacity-100"
            href="https://cowrywise.com/mutual-funds"
            target="_blank"
          >
            View full list of available mutual funds on Cowrywise.↗
          </a>
        </p>

        <p>
          Stash account is a 10-digit virtual bank account number in line with
          the Nigeria Uniform Bank Account Number (NUBAN) numbering system. The
          NUBAN accounts are generated with the names of selected banks through
          our payment partners. In order for a user to be eligible for Stash
          account number, they must have completed their KYC and added their
          Bank Verification Number (BVN). Stash is used for the purpose of
          receiving money transfers in place of a regular debit card. It also
          receives the proceeds from the sale of any mutual fund on Cowrywise.
        </p>

        <p>
          The content on this website does not constitute a complete description
          of Cowrywise’s offerings and services. By using this website, you
          accept our
          <a
            class="text-cowry-main text-opacity-80 hover:text-opacity-100"
            href="https://cowrywise.com/terms"
            target="_blank"
          >
            Terms of Use
          </a>
          and
          <a
            class="text-cowry-main text-opacity-80 hover:text-opacity-100"
            href="https://cowrywise.com/privacy"
            target="_blank"
          >
            Privacy Policy.
          </a>
        </p>

        <p>
          Google Play and the Google Play logo are trademarks of Google LLC.
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.
          registered in the U.S.
        </p>

        <p>©2022 Cowrywise Financial Technology. All rights reserved</p>
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
    const footer_nav_links = ref([
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
            title: 'Careers',
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
            link: 'https://cowrywise.frontify.com/',
          },
          {
            title: 'FAQs',
            link: 'https://cowrywise.com/faq',
          },
          {
            title: 'Security',
            link: 'https://cowrywise.com/security',
          },
          {
            title: 'Estimate your Interest',
            link: 'https://cowrywise.com/interest-tool',
          },
          {
            title: 'Plan Education',
            link: 'https://cowrywise.com/education-tool',
          },
          {
            title: 'Blog',
            link: 'https://cowrywise.com/blog',
          },
          {
            title: 'Help',
            link: 'http://help.cowrywise.com/',
          },
        ],
      },
      {
        title: 'Contact',
        sub_links: [
          {
            title: 'support@cowrywise.com',
            link: 'support@cowrywise.com',
          },
          {
            title: 'WhatsApp ↗',
            link: 'https://wa.me/message/TCXFSJS3VKZPD1',
          },
        ],
      },
    ])

    const socials = ref([
      {
        title: 'Twitter',
        link: 'https://twitter.com/cowrywise',
      },
      {
        title: 'Facebook',
        link: 'https://facebook.com/cowrywise',
      },
      {
        title: 'Whatsapp',
        link: 'https://wa.me/message/TCXFSJS3VKZPD1',
      },
      {
        title: 'Telegram',
        link: 'https://t.me/cowrywise',
      },
      {
        title: 'Instagram',
        link: 'https://instagram.com/cowrywise',
      },
      {
        title: 'Youtube',
        link: 'https://www.youtube.com/channel/UCRApoo2RnIcX4ocFmKZwYSg',
      },
    ])

    return {
      footer_nav_links,
      socials,
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
