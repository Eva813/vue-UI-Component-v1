<script setup lang="ts">
import Tooltip from '../components/Tooltip.vue'
import CustomTooltip from '../components/TooltipTwo.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';

// const isTooltipVisible = ref(false)
// const showTooltip = () => {
//   // 在這裡編寫顯示提示的邏輯
//   console.log('Showing tooltip');

//   // 例如，可以在這裡設置一個狀態變數，用於控制提示的顯示狀態
//   isTooltipVisible.value = true;
// };
</script>

<template>
  <div class="mt-[30px]" >
      <Tooltip text="Difficulty">
        <span> hover over me </span>
      </Tooltip>

      <div>
      <CustomTooltip :text="'tooltip Hover me'" class="mt-[30px] block" :position="'top'">
        <button >hover me</button>
      </CustomTooltip> 
      </div>
      <CustomTooltip :text="'tooltip Hover me'" class="mt-[30px]" :position="'right'">
        <button>hover me</button>
      </CustomTooltip>
  </div>
</template>

