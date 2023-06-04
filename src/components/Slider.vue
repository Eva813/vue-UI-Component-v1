<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface Props {
  min: number;
  max: number;
  step: number;
  value: number;
}

const props = withDefaults(defineProps<Props>(), {
  min: 1,
  max: 100,
  step: 2,
  value: 2
});

const thumbPosition = ref(0);
const trackWidth = computed(() => `${((props.value - props.min) / (props.max - props.min)) * 100}%`);
const emit = defineEmits(["update:value"]);



</script>

<template>
  <div class="relative h-4 w-full bg-[#ddd]">
    <div class="slider-track" :style="{ width: trackWidth }">track</div>
    <!-- Slider -->
      <div
        class="slider-thumb"
        :style="{ left: thumbPosition }"
        @mousedown="startDrag"
        @touchstart="startDrag"
      ></div>
  </div>
</template>
<style>
.slider-track {
  position: absolute;
  height: 100%;
  background-color: #428bca;
}

.slider-thumb {
position: absolute;
top: 50%;
transform: translateY(-50%);
height: 16px;
width: 16px;
background-color: #428bca;
border-radius: 50%;
cursor: pointer;
}
</style>

