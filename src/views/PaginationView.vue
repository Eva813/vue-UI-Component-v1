<script setup lang="ts">
import Pagination from '../components/Pagination.vue'
import { reactive, computed,ref } from 'vue'
let pagination = reactive({
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 100,
})


const userData = reactive( [
  { name: 'Eva', id: 1, location: 'Taipei' },
  { name: 'wva', id: 2, location: 'Taipei' },
  { name: 'dva', id: 3, location: 'Taipei' },
  { name: 'tva', id: 4, location: 'Taipei' },
  { name: 'uva', id: 5, location: 'Taipei' },
  { name: 'iva', id: 6, location: 'Taipei' },
  { name: 'jva', id: 7, location: 'Taipei' },
  { name: 'Eva', id: 8, location: 'Taipei' },
  { name: 'hva', id: 9, location: 'Taipei' },
  { name: 'gva', id: 10, location: 'Taipei' },
  { name: 'Effva', id: 11, location: 'Taipei' },
  { name: 'Efva', id: 12, location: 'Taipei' },
  { name: 'Efvea', id: 13, location: 'Oaipei' },
  { name: 'Efeva', id: 14, location: 'Maipei' },
  { name: 'Efva', id: 15, location: 'Taipei' },
  { name: 'Effva', id: 16, location: 'Taipei' },
]);

const pagedUsers = computed(() => {
  console.log('pagination.currentPage', pagination.currentPage)
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  return userData.slice(startIndex, endIndex);
});

const previousPageHandler = (newPage: number) => {
  pagination.currentPage = newPage;
}
const nextPageHandler = (newPage: number) => {
  console.log('nextOuter',newPage)
  pagination.currentPage = newPage;
}
const paginationEl = ref<HTMLInputElement | null>(null)
const goToPage = (page:number)=>{
  console.log('ee', page)
  // pagination.goToPage(pageNumber);
  pagination.currentPage = page;
}

</script>

<template>
  <div>
    <ul>
      <li v-for="user in pagedUsers" :key="user.id">{{ user.name }}:{{user.id}}</li>
    </ul>
    <Pagination
        ref="paginationEl"
        :current-page="pagination.currentPage"
        :items-per-page="pagination.itemsPerPage"
        :total-items="userData.length"
        @previous-page="previousPageHandler"
        @next-page="nextPageHandler"
        @go-to-page="goToPage"

    ></Pagination>
    <div class="fetch-data">
      
    </div>
  </div>
</template>


        <!-- @previous-page="previousPageHandler"
        @next-page="nextPageHandler" -->
