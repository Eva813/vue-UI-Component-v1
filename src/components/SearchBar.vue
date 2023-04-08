<script setup lang="ts">
const props = defineProps({
  inputValue: String,
});
const emit = defineEmits(["update:input-value","submitValue"]);
const updateValue = (event:any) => {
  emit("update:input-value", event.target.value);
};
const submitEvent = ()=>{
  emit('submitValue')
}
</script>
<template>
  <form>   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
          <slot name="icon"></slot>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required :value="inputValue" @input="updateValue" >
          <slot name="button" @click="submitEvent"></slot>
      </div>
  </form>
</template>
