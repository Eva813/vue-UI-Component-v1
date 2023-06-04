<script setup lang="ts">
import Slider from '../components/Slider.vue'
import VolumeSlider from '../components/VolumeSlider.vue'
import MinMaxSlider from '../components/MinMaxSlider.vue'
import { ref, watchEffect } from 'vue'

const sliderValue = ref(50);
const slider = ref(null);
const getProgress = (value: number, min: number, max: number) => {
  return ((value - min) / (max - min)) * 100;
};

//設置 --ProgressPercent 變數寬度
const setCSSProgress = (progress: number) => {
  slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

//透過 watch 即時觀察
watchEffect(() => {
  if (slider.value) {
    const progress = getProgress(
      sliderValue.value,
      slider.value.min,
      slider.value.max
    );
    //
    let extraWidth = (100 - progress) / 10;
    setCSSProgress(progress + extraWidth);
  }
});

const slider1 = ref(50);
const slider2 = ref(0);

const sliderMin = ref(50);
const sliderMax = ref(80);
</script>
<template>
  <div>
    <h2>VolumeSlider</h2>
    <VolumeSlider />
    <h2>在頁面實作</h2>
    <div class="custom-slider">
      <input v-model="sliderValue" type="range" min="0" max="100" class="slider" />
      <br />
      <input v-model="sliderValue" type="number" />
    </div>
    <h2>自製元件</h2>
    <Slider :max="100" v-model="slider1" />
    <Slider :min="-1" :max="1" :step="0.01" v-model="slider2" />
    <p>step 每次0.01增加</p>
    <h2>最大值、最小值 slider</h2>
    <h2>Slider 3: {{ sliderMin }} - {{ sliderMax }}</h2>
    <MinMaxSlider 
        :max="700"
        v-model:min-value="sliderMin"
        v-model:max-value="sliderMax"
    />
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
  appearance: none; /*將原本瀏覽器預設樣式去除*/
  border-radius: 999px;
  z-index: 0;
  /* pointer-events: none; */  /*點擊事件*/

}

/* ::before 用來取代 slider track(橫向的那條線)  */
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
/* 針對其::-webkit-slider-runnable-track偽元素應用樣式。 */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #ddd; 
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: #ddd;
  height: var(--trackHeight);
  border-radius: 999px;
}

/*thumb 為上方圓形點*/
.custom-slider input[type="range"]::-webkit-slider-thumb{
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: var(--thumbRadius);
  height: var(--thumbRadius);
   /* margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2); */
  background: #00bd7e;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

</style>
