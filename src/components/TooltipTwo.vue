<script setup lang="ts">
import { ref, onMounted,  computed } from 'vue';

const isTooltipVisible = ref(false);

export interface Props {
  text: string ;
  position: string
}
const props = withDefaults(defineProps<Props>(), {
  text: '',
  position: ''
});






const showTooltip = () => {
  isTooltipVisible.value = true;
};

const hideTooltip = () => {
  isTooltipVisible.value = false;
};

const hoverRef = ref()
onMounted(() => {
  console.log(`the component is now mounted. ${hoverRef.value}`)
  const activator = hoverRef.value

  activator!.addEventListener('mouseenter', showTooltip);
  activator!.addEventListener('mouseleave', hideTooltip);
})

// onBeforeUnmount(() => {
//   const activator = hoverRef.value
//   activator.removeEventListener('mouseenter', showTooltip);
//   activator.removeEventListener('mouseleave', hideTooltip);
// });

const tooltipClasses = computed(() => ({
  'tooltip-text': true,
  [`tooltip-${props.position}`]: true
}))


</script>
<template>
  <div class="tooltip-wrapper relative inline-block" ref="hoverRef">
    <slot></slot>
    <div v-if="isTooltipVisible"  :class="tooltipClasses">
      {{ text }}
      <!-- <slot></slot> -->
    </div>
  </div>
</template>
<style scoped>
/* //https://mayashavin.com/articles/tooltip-component-css-vue */

.tooltip-text {
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;
  min-width: 120px;
  background: #5e5d5d;
  position: absolute;
  z-index: 1;
}

:slotted(*):focus + .tooltip-text {
    visibility: visible;
    opacity: 1;
}

/* /位置調整 */
.tooltip-top {
  inset-block-end: 120%;
  inset-inline-start: 50%;
  margin-inline-start: -60px;
}

.tooltip-bottom {
  inset-block-start: 120%;
  inset-inline-start: 50%;
  margin-inline-start: -60px;
}

.tooltip-left {
  inset-block-end: 0%;
  inset-inline-end: 110%;
}

.tooltip-right {
  inset-block-end: 0%;
  inset-inline-start: 110%;
}
</style>
