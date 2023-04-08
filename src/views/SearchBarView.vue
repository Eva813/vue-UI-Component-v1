<script setup lang="ts">
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
const fruits = ref(["apple", "banana", "orange",'kiwi']);
// let inputEl = ref("");
// const filterFruit = ()=>{
//   return fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(inputEl.value.toLowerCase())
//   );
// }
const newFruit = ref<string[]>([])
//從子層傳過來的值
const parentValue = ref('')
const handleSubmit = ()=>{
  fruits.value = fruits.value.filter((fruit) =>
    fruit.toLowerCase().includes(parentValue.value.toLowerCase())
  );
  parentValue.value = ''
}
</script>
<template>
  <div>
    <h2 class="mb-4">Search Barsddfe</h2>
    <SearchBar>
      <template #icon>
        <div class="absolute inset-y-0 left-0 flex z-10 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </template>
      <template #button>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </template>
    </SearchBar>
    <h3>the other</h3>
    <SearchBar>
        <template #button>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5  font-medium rounded-lg text-sm px-4 py-2 ">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </template>
    </SearchBar>
    <h3 class="mt-2">Implement Example</h3>
    <!-- //https://blog.logrocket.com/create-search-bar-vue/ -->
    <SearchBar  v-model:input-value="parentValue" @submit.prevent="handleSubmit">
      <template #icon>
        <div class="absolute inset-y-0 left-0 flex z-10 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </template>
      <template #button>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </template>
    </SearchBar>
    <p class="font-bold">filter fruit List</p>
    <div v-for="fruit in fruits" :key="fruit">
      <p>{{ fruit }}</p>
    </div>
    <div class="mt-2">
      <span class="bg-cyan-500 p-2">after submit</span>
      {{ newFruit }}
    </div>
  </div>
</template>
