<script setup lang="ts">
import MyButton from '../components/Button.vue'
import {  defineEmits, computed  } from 'vue'

export interface Props {
  currentPage:number,
  itemsPerPage:number,
  totalItems:number
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  itemsPerPage:10,
  totalItems:10
})

const emits = defineEmits(['previous-page','next-page','go-to-page'])

const previousPage = ()=> {
  emits('previous-page', props.currentPage - 1)
}

const nextPage = () => {
  console.log('nextInner',props.currentPage)
  emits('go-to-page', props.currentPage + 1)
}

const totalPages = computed(()=>{
  return Math.ceil(props.totalItems / props.itemsPerPage);
})
const pages = computed(()=>{
  const startPage = Math.max(props.currentPage - 2, 1);
  //最後頁面的顯示
  const endPage = Math.min(props.currentPage + 2, totalPages.value);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
})

const goToPage = (page:number)=>{
  emits('next-page', page)
}

</script>
<template>
  <div class="pagination flex">
    <MyButton :disabled="currentPage <= 1" @click="previousPage" class="text-sky-400">
      Previous
    </MyButton>
    <MyButton v-for="page in pages" :key="page"  @click="goToPage(page)" :disabled="false" class="p-2 m-2 rounded-full bg-cyan-400 h-10 w-10"> 
        {{ page }}
      </MyButton>
    <MyButton :disabled="currentPage > totalPages" @click="nextPage" class="text-sky-400">
      Next
    </MyButton>
  </div>
</template>
<style>


</style>
