<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from 'vue';
const dataSet = ref([
  {
    id: '1',
    title: 'Ticket',
    label: 'ticket',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '2',
    title: 'Event Info',
    label: 'event-info',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '3',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '4',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '5',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '6',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '7',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '8',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '9',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '10',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '11',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '12',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '13',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '14',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '15',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '16',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '17',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  },
  {
    id: '18',
    title: 'Tax Free',
    label: 'tax-free',
    description: 'dfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
  }
]);

const scrollWrapper = ref(null);
const visibleData = ref([]);
const isLoading = ref(false);
//每次切4筆
const batchSize = 4;

const scrollThreshold = 200;

const handleScroll = () => {
  const scrollContainer = scrollWrapper.value;
  if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - scrollThreshold) {
    // 当滚动到底部时加载更多数据
    loadMoreData();
  }
};
const loadMoreData = () => {
  if (isLoading.value || visibleData.value.length === dataSet.value.length) return;
  isLoading.value = true;
  // 模拟异步加载数据的延迟
  setTimeout(() => {
  const currentDataLength = visibleData.value.length;
    const newData = dataSet.value.slice(currentDataLength, currentDataLength + batchSize);
    console.log(newData)

    visibleData.value = [...visibleData.value, ...newData];
    isLoading.value = false;
  }, 2000);
};
onMounted(() => {
  // 初始化加载首批数据
  loadMoreData();
});
</script>

<template>
  <!-- {{ tc }} -->
  <div>
    <div>MyTab <br /></div>
    <div class="employee-list-wrapper" ref="scrollWrapper" @scroll="handleScroll">
      <ul v-if="visibleData" class="employee-list" v-for="item in visibleData" :key="item.id">
        <li>{{ item.id }}: {{ item.description }}</li>
      </ul>
      <li class="loading" v-if="isLoading">Loading...</li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: red;
}

//高度要計算，顯示幾筆
.employee-list-wrapper {
  border: 1px solid #cccc;
  margin: 0 auto;
  height: 99px;
  width: 500px;
  overflow-y: scroll;
}

.loading {
  color: green;
}
li{
  padding: 1px 1px;
}
</style>
