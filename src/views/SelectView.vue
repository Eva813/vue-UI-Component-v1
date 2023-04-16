<script setup lang="ts">
import { ref, computed } from 'vue'
import Select from '../components/Select.vue'
import SelectNew from '../components/SelectNew.vue'
const selectedValue1 = ref('')
const selectedValue2 = ref([])
const optionsOne = ref([
  { label: 'Apple', value: 'Apple' },
  { label: 'Kiwi', value: 'Kiwi' },
  { label: 'Guava', value: 'Guava' },
])

const optionsThree = ref([
  { label: 'One', value: 'One' },
  { label: 'Two', value: 'Two' },
  { label: 'Three', value: 'Three' },
])
const selectedValue3 = ref({})
const optionsFour = ref([
  { label: 'One 1', value: 'One' },
  { label: 'Two 2', value: 'Two' },
  { label: 'Three 3', value: 'Three' },
])
const selectedValue4 = ref([])
</script>
<template>
  <div>
    <h1>My select demo</h1>
    <Select v-model:selected-values="selectedValue1" :options="optionsOne" ></Select>
    {{ selectedValue1 }}
    <h2>multiple select</h2>
    <Select v-model:selected-values="selectedValue2" :multiple="true" ></Select>
    {{ selectedValue2 }}
    <h2> 測試新 select 單選 </h2>
    <div class="p-3 mb-2 bg-gray-200 rounded">
      <SelectNew :options="optionsThree"  v-model:selected-values="selectedValue3" :placeholder="'請選擇..'" :clearable="false" ></SelectNew>
      <div>選到的 {{ selectedValue3 }}</div>
    </div>
    <div class="p-3 bg-gray-200 rounded">
      <h2> 測試新 select 多選 </h2>
      <SelectNew :options="optionsFour" v-model:selected-values="selectedValue4" :placeholder="'請選擇多個..'" :clearable="true" :multiple="true"></SelectNew>
      <div>選到的 {{ selectedValue4 }}</div>
    </div>
  </div>
</template>
