<template>
  <section id="hero" class="w-full h-full pb-48">
    <div class="grid grid-cols-2 gap-x-16 xl:gap-x-20 h-full container mx-auto">
      <div class="w-full space-y-16 xl:space-y-20">
        <div class="w-full p-6">
          <h3 class="text-5xl text-cowry-dark font-semibold mb-4">
            Get financial freedom
          </h3>

          <span
            class="block text-xl text-cowry-dark text-opacity-70 font-medium"
          >
            Plan towards your dream home, fund your kid's education, travel the
            world, all in one app.
          </span>
        </div>

        <div v-for="card_object in left_card_objects" :key="card_object.title">
          <BaseGetStartedCard :card_object="card_object" />
        </div>
      </div>

      <div class="w-full space-y-16 xl:space-y-20">
        <div v-for="card_object in right_card_objects" :key="card_object.title">
          <BaseGetStartedCard :card_object="card_object" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'IndexPage',
  setup() {
    const left_card_objects = ref([
      {
        title: 'Savings',
        description: 'Create multiple savings plans',
        details: 'Earn better interest rates than your bank',
        link_text: 'start saving',
        link: 'https://cowrywise.com/save',
        mouse_out_image: require('~/assets/img/getting-started/savings.png'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-purple-100 bg-opacity-90',
        bg_contrast: 'light',
      },
      {
        title: 'Mutual Funds',
        description: 'Play the long-term game',
        details: 'Invest in diverse and quality mutual funds with any amount',
        link_text: 'start investing',
        link: 'https://cowrywise.com/mutual-funds',
        mouse_out_image: require('~/assets/img/getting-started/mutual-funds.svg'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-pink-100 bg-opacity-90',
        bg_contrast: 'light ',
      },
      {
        title: 'Stash',
        description: 'Your secure digital wallet',
        details:
          'Send and receive cash in seconds for free. You only need their username.',
        link_text: 'Explore it now',
        link: 'https://cowrywise.com/stash',
        mouse_out_image: require('~/assets/img/getting-started/stash.svg'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-cowry-main',
        bg_contrast: 'dark',
      },
    ])

    const right_card_objects = ref([
      {
        title: 'Circles',
        description: 'Save with friends',
        details: 'Stay motivated and have fun saving with friends and family',
        link_text: 'join a circle',
        link: 'https://cowrywise.com/circles/',
        mouse_out_image: require('~/assets/img/getting-started/circles.svg'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-red-100 bg-opacity-90',
        bg_contrast: 'light',
      },
      {
        title: 'Emergency Fund',
        description: 'Save for the rainy day',
        details: 'Build a safety net for unexpected expenses',
        link_text: 'copy your emergency plan',
        link: 'https://cowrywise.com/blog/emergency-fund/',
        mouse_out_image: require('~/assets/img/getting-started/emergency.svg'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-blue-100 bg-opacity-80',
        bg_contrast: 'light',
      },
      {
        title: 'US Stocks and bonds (Coming soon)',
        description: 'Grow your global portfolio',
        details: '',
        link_text: 'get early access',
        link: 'https://forms.gle/gnkq5MZjcXnxovnx6',
        mouse_out_image: require('~/assets/img/getting-started/stocks.svg'),
        mouse_over_image: require('~/assets/img/getting-started/start-building.png'),
        bg_color: 'bg-indigo-100 bg-opacity-80',
        bg_contrast: 'light',
      },
    ])

    return {
      left_card_objects,
      right_card_objects,
    }
  },
}
</script>

<style scoped></style>
