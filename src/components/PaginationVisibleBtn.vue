<script setup lang="ts">
import { ref, computed } from 'vue'

export interface Props {
  totalItems: number,
  itemsPerPage: number,
  length:number,
}

const props = withDefaults(defineProps<Props>(), {
  totalItems: 0,
  itemsPerPage: 5,
  length: 4
})

const currentPage = ref<number>(0)
const totalPages = computed(()=>{
  return Math.ceil(props.totalItems / props.itemsPerPage);
})
const visiblePages = computed(()=>{
  const startPage = Math.max(1, currentPage.value - Math.floor(props.length / 2));
  const endPage = Math.min(totalPages.value, startPage + props.length - 1);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;

})

const emit = defineEmits(["page-change"]);
const changePage = (page:number)=>{
  if (page !== currentPage.value) {
    currentPage.value = page;
    emit('page-change', currentPage.value);
  }
}
const prevPage = ()=>{
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('page-change', currentPage.value);
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit('page-change', currentPage.value);
  }
}

</script>
<template>
  <div class="pagination-container">
    <ul class="pagination">
      <!-- 上一頁按鈕 -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="prevPage">&laquo;</a>
      </li>
      <!-- 頁碼連結，顯示省略符號 -->
      <li class="page-item" v-if="visiblePages[0] > 1">
        <a class="page-link" href="#" @click="changePage(1)">1</a>
      </li>
      <li class="page-item" v-if="visiblePages[0] > 2">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" v-for="page in visiblePages" :key="page">
        <a class="page-link" href="#" :class="{ 'active': page === currentPage }" @click="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" v-if="visiblePages[visiblePages.length - 1] < totalPages - 1">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" v-if="visiblePages[visiblePages.length - 1] < totalPages">
        <a class="page-link" href="#" @click="changePage(totalPages)">{{ totalPages }}</a>
      </li>
      <!-- 下一頁按鈕 -->
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click="nextPage">&raquo;</a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  list-style-type: none;
}

.page-item {
  cursor: pointer;
}

.page-link {
  padding: 0.5rem 0.75rem;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
  pointer-events: none;
}

.active {
  color: red;
  /* 紅色文字顏色 */
}
</style>

