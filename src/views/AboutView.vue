<script setup lang="ts">
import MyButton from '../components/Button.vue'

</script>

<template>
  <div class="about">
    <h1>This is an about Buttons</h1>
    <MyButton :disabled="true" class="border-solid border-2 border-sky-500"> this is button component</MyButton>
    <MyButton  class="p-1 mt-2 bg-yellow-500 rounded" :disabled="false"> 
      button with icon <i class="fi fi-ss-user"></i>
    </MyButton>
    <MyButton  class="p-1 mt-2 bg-yellow-500 rounded" :disabled="false"> 
        <i class="fi fi-ss-user"></i> button with icon 
      </MyButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
