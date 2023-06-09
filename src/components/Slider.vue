<script setup lang="ts">

import { ref, watchEffect } from "vue";

// define component props for the slider component
//外層會綁定 v-model 傳 value 近來且近一步會 emit 值出去
const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 50,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component
const sliderValue = ref(modelValue);
const slider = ref<HTMLInputElement | null>(null);

// function to get the progress of the slider
const getProgress = (value: number, min: number, max: number) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for 進度條
const setCSSProgress = (progress: number) => {
  if (slider.value !== null) {
    slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
  }
};

// watchEffect to update the css variable when the slider value changes
watchEffect(() => {
  if (slider.value) {
    // emit the updated value to the parent component
    emit("update:modelValue", sliderValue.value);

    // 更新 the slider progress
    const progress = getProgress(
      sliderValue.value,
      parseFloat(slider.value.min),
      parseFloat(slider.value.max)
    );

    // define extrawidth to ensure that the end of progress is always under the slider thumb.
    let extraWidth = (100 - progress) / 10;

    // set the css variable
    setCSSProgress(progress + extraWidth);
  }
});

const handleInputChange = (e: any)=>{
  const targetValue = parseFloat(e.target.value);
  sliderValue.value = targetValue
}
</script>

<template>
  <!-- //@input="({ target }) => (sliderValue = parseFloat(target.value))" -->
  <div class="custom-slider">
    <input ref="slider" :value="sliderValue" 
      @input="handleInputChange"
      type="range" :min="min" :max="max" :step="step" class="slider" />
    <input :value="sliderValue" 
        @input="handleInputChange"
        :min="min" 
        :max="max"
        :step="step"  
        type="number" class="input" />
  </div>
</template>


<style scoped>
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: #00865a;
  /* z-index: -1; */
  pointer-events: none;
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #ccc;
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: #ccc;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  /* top: 50%; 
  transform: translate(0, -50%);
  */
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: #00bd7e;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}
</style>
