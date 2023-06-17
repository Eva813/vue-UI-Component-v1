<script setup lang="ts">
//https://blog.boot.dev/javascript/custom-tooltip-component-in-vue/
export interface Props {
  text: string,
}

const props  = withDefaults(defineProps<Props>(), {
  text: ''
})
</script>

<template>
  <div class="group">
    <div class="tooltip-box relative inline-block">
      <slot />
      <div
          class="tooltip opacity-0   text-white text-center py-2 px-4 rounded-md w-[170px] bottom-full left-1/2 -translate-x-1/2    group-hover:opacity-100  transition duration-1000 ease-in-out  absolute z-10 bg-purple-500"
        >
          <span
            class="text"
          >{{ text }}</span>
      </div>
    </div>
  </div>

</template>

<style scoped>

/* 三角形 */
/* .text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #a782e8 transparent transparent transparent;
} */

</style>
