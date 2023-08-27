<script setup lang="ts">
import TabA from '../components/DynamicComponent/TabA.vue'
import TabB from '../components/DynamicComponent/TabB.vue'
import type { Component } from 'vue'
//https://blog.codeminer42.com/how-to-use-dynamic-components-in-vue/
import { ref, watchEffect } from "vue"
const currentTab = ref('TabA')

const handleClick = (val: string | number)=>{
  currentTab.value = val as string
}



const tabs: Component = {
  TabA,
  TabB,
};


</script>

<template>
  <div class="demo">

    <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="handleClick(tab)"
      >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
      <!-- <TabA  v-if="activeTab === 'TabA'"/>
      <TabB v-if="activeTab === 'TabB'"/> -->
  </div>
</template>
<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
