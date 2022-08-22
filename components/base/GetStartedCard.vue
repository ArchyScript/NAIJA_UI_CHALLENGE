<template>
  <div :class="card_object.bg_color" class="rounded-3xl">
    <div class="p-12 pb-4 space-y-3">
      <h5
        :class="
          card_object.bg_contrast === 'light'
            ? 'text-cowry-dark text-opacity-60 '
            : 'text-cowry-light text-opacity-90'
        "
        class="block text-2xl capitalize font-medium pb-2"
      >
        {{ card_object.title }}
      </h5>

      <h3
        :class="
          card_object.bg_contrast === 'light'
            ? 'text-cowry-dark'
            : ' text-cowry-light text-opacity-90'
        "
        class="text-4xl font-semibold pb-2"
      >
        {{ card_object.description }}
      </h3>

      <p
        v-if="card_object.details !== ''"
        :class="
          card_object.bg_contrast === 'light'
            ? 'text-cowry-dark text-opacity-70'
            : 'text-cowry-light text-opacity-80'
        "
        class="block text-xl font-medium pb-2"
      >
        {{ card_object.details }}
      </p>

      <p class="flex justify-between w-auto py-2">
        <a
          :href="card_object.link"
          target="_blank"
          :class="
            card_object.bg_contrast === 'light'
              ? 'text-cowry-main '
              : ' text-cowry-light'
          "
          class="cursor-pointer select-none text-sm py-1.5 px-2.5 uppercase text-opacity-80 hover:text-opacity-100 font-medium"
        >
          {{ card_object.link_text }}
        </a>
      </p>
    </div>

    <div
      class="flex justify-end w-full"
      @mouseover="toggleImage('mouse_over')"
      @mouseout="toggleImage('mouse_out')"
    >
      <img
        :class="is_mouse_over ? 'hidden' : ''"
        class="w-4/5 -mt-5 object-right"
        :src="card_object.mouse_out_image"
        alt=""
      />

      <img
        :class="is_mouse_over ? '' : 'hidden'"
        class="block w-1/3 h-full mx-auto"
        :src="card_object.mouse_over_image"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { GetStartedCard } from '~/controller/index'
import { PropType } from 'vue/types/v3-component-props'

export default {
  name: 'IndexPage',
  props: {
    card_object: {
      type: Object as PropType<GetStartedCard>,
      required: true,
    },
  },
  setup() {
    const is_mouse_over = ref(false)

    const toggleImage = (mouse_action: string) => {
      if (mouse_action === 'mouse_over') return (is_mouse_over.value = true)
      else return (is_mouse_over.value = false)
    }

    return { is_mouse_over, toggleImage }
  },
}
</script>

<style scoped></style>
