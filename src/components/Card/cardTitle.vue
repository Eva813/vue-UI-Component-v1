<template>
  <!-- Displays slot content or default title -->
  <div v-bind="$attrs">
    <slot  name="title">{{ title }}</slot>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Default title__titleComp',
  },
})
const a = 1;

</script>
