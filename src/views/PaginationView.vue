<script setup lang="ts">
import Pagination from '../components/Pagination.vue'
import PaginationVisibleBtn from '../components/PaginationVisibleBtn.vue'
import { reactive, computed,ref } from 'vue'
import axios from 'axios';
import type { AxiosResponse } from 'axios';

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


////API
const apiUrl = "https://jsonplaceholder.typicode.com/users";
const userOnlineList = ref([])
const onlineUserPagination = reactive({
  currentPage: 1,
  itemsPerPage: 5,
  totalUsers: 0,
})


const fetchData = async () => {
  // const response: AxiosResponse = await axios.get(url);
  console.log('onlineUserPagination',onlineUserPagination)
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/`
  )
  console.log('res',response.data)
  userOnlineList.value = response.data;
  onlineUserPagination.totalUsers = response.data.length;
}

const previousPageUser = (newPage: number) => {
  onlineUserPagination.currentPage = newPage;
  fetchData()
}
const nextPageUser  = (newPage: number) => {
  console.log('nextOuter', newPage)
  onlineUserPagination.currentPage = newPage;
  fetchData()
}
// const paginationEl = ref<HTMLInputElement | null>(null)
const goToPageUser = (page: number) => {
  console.log('ee', page)
  // pagination.goToPage(pageNumber);
  pagination.currentPage = page;
  fetchData()
}

// fetchData()



//////

const visibleData = reactive([
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

</script>

<template>
  <div>
    <div>Pagination</div>
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
    <!-- <div class="fetch-data">
      <ul>
        <li v-for="(user, index) in userOnlineList" :key="index">
          {{ user.name }} - {{ user.id }} - {{ user.email }}
        </li>
      </ul>
        <Pagination
          ref="paginationUser"
          :current-page="onlineUserPagination.currentPage"
          :items-per-page="onlineUserPagination.itemsPerPage"
          :total-items="onlineUserPagination.totalUsers"
          @previous-page="previousPageUser"
          @next-page="nextPageUser"
          @go-to-page="goToPageUser"
      ></Pagination>
    </div> -->
    <div>
      <h3>隨設定程度變化可見的按鈕數</h3>
      <PaginationVisibleBtn
        :total-items="visibleData.length"
        :items-per-page="2"
        :length="4"
      ></PaginationVisibleBtn>
    </div>
  </div>
</template>


        <!-- @previous-page="previousPageHandler"
        @next-page="nextPageHandler" -->
