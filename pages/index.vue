<template>
  <HomePage />
</template>

<script lang="ts">
import { ref } from 'vue'
import VTypical from 'vue-typical'
import HomePage from '~/components/HomePage/index.vue'

export default {
  name: 'IndexPage',
  layout: 'landing',
  components: { VTypical, HomePage },
  setup() {
    const steps = ref([
      {
        img: 'sign-up.png',
        title: 'Sign Up',
        description:
          'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
      },
      {
        img: 'fund.png',
        title: 'Fund',
        description:
          'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
      },
      {
        img: 'buy-crypto.png',
        title: 'Buy Crypto',
        description:
          'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
      },
    ])
    const trendings = ref([
      {
        id: 1,
        name: 'Bitcoin',
        price: 43180.13,
        logo: 'bitcoin.png',
        increase: true,
        data: [40, 35, 60, 75, 60, 75, 50],
      },
      {
        id: 2,
        name: 'Ethereum',
        price: 3480.65,
        logo: 'ethereum.png',
        increase: false,
        data: [25, 30, 60, 50, 80, 55, 80],
      },
      {
        id: 3,
        name: 'Solana',
        price: 150.2,
        logo: 'solana.png',
        increase: true,
        data: [40, 45, 40, 80, 50, 60, 35],
      },
      {
        id: 4,
        name: 'Dogecoin',
        price: 0.1572,
        logo: 'dogecoin.png',
        increase: true,
        data: [35, 70, 60, 80, 50, 60, 40],
      },
    ])
    const topGainers = ref([
      {
        id: 1,
        name: 'PAPPAY',
        price: 0.00374,
        logo: 'pappay.png',
        increase: true,
        data: [30, 50, 45, 60, 70, 40, 45],
      },
      {
        id: 2,
        name: 'Bitcoin Asia',
        price: 0.02096,
        logo: 'bitcoin-asia.png',
        increase: true,
        data: [25, 60, 50, 60, 35, 50, 70],
      },
      {
        id: 3,
        name: 'MoonRock',
        price: 0.004907,
        logo: 'moonrock.png',
        increase: true,
        data: [40, 35, 40, 25, 50, 70, 45],
      },
      {
        id: 4,
        name: 'NinjaFloki',
        price: 0.000123,
        logo: 'ninjafloki.png',
        increase: true,
        data: [45, 35, 40, 30, 25, 45, 35],
      },
    ])
    const recents = ref([
      {
        id: 1,
        name: 'MetaCraft',
        price: 0.0608,
        logo: 'metacraft.png',
        increase: false,
        data: [40, 50, 45, 60, 35, 40, 45],
      },
      {
        id: 2,
        name: 'Frog',
        price: 0.5875,
        logo: 'frog.png',
        increase: false,
        data: [25, 50, 45, 48, 40, 60, 45],
      },
      {
        id: 3,
        name: 'Musk Doge',
        price: 0.04041,
        logo: 'musk-doge.png',
        increase: true,
        data: [25, 35, 60, 45, 50, 45, 45],
      },
      {
        id: 4,
        name: '2SHARE',
        price: 1366.24,
        logo: '2share.png',
        increase: true,
        data: [35, 30, 60, 50, 35, 45, 40],
      },
    ])
    const accordions = ref([
      {
        title: 'Why should I choose NEFA?',
        description:
          "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      },
      {
        title: 'How secure is NEFA?',
        description:
          "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      },
      {
        title: 'Do I have to buy a whole Bitcoin?',
        description:
          "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      },
      {
        title: 'How do I actually buy Bitcoin?',
        description:
          "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      },
    ])
    return { accordions, recents, topGainers, trendings, steps }
  },
}
</script>
