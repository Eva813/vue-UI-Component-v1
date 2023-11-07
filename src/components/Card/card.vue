<template>
  <!-- https://vuetifyjs.com/en/components/cards/ -->
  <cardTitle v-bind="$attrs">
      <!-- use template tag to render -->
      <template #title>
        <slot name="title">{{ props.title }}</slot>
      </template>
  </cardTitle>
  <div>
  </div>
</template>
<script setup lang="ts">
import cardTitle from '../Card/cardTitle.vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

</script>
<!-- https://juejin.cn/post/7252170693675237436 -->
