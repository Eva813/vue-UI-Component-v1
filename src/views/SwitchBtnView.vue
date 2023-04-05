<script setup lang="ts">
import { ref } from 'vue'
import SwitchButton from '../components/SwitchButton.vue'

</script>

<template>
  <div>
    <!-- 處理中間label,處理api 換頁,要傳入  -->
    <h2>Switch Button</h2>
    <SwitchButton :disabled="false"  :switchWidth="true" class="mb-5" color="blue">
      <template #left-label>
        <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
      </template>
    </SwitchButton>
    <SwitchButton :disabled="false"  :switchWidth="true" class="mb-5" color="green">
        <template #left-label>
          <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </template>
      </SwitchButton>
    <SwitchButton :disabled="true" :switchWidth="true" >
        <template #right-label>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" >Toggle me</span>
        </template>
      
      </SwitchButton>
        <SwitchButton :disabled="false" :switchWidth="false">
          <template #middle-label>
            <span class="ml-3 text-sm  font-medium text-gray-900 dark:text-gray-300" >Toggle me</span>
          </template>
        </SwitchButton>
  </div>
</template>
