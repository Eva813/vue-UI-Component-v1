<script setup lang="ts">
import FormElementWrap from '../components/FormElementWrap.vue'
import Select from '../components/Select.vue'
import { ref } from "vue"
//input, select,textarea
const selectedValue1 = ref('')

const optionsOne = ref([
  { label: 'Apple', value: 'Apple' },
  { label: 'Kiwi', value: 'Kiwi' },
  { label: 'Guava', value: 'Guava' },
])

</script>
<template>
  <div class="formView">
    formView
    <FormElementWrap
      :has-error="true"
      :msg="'this is error message'"
      :name="'文字輸入框'"
    >
    <!-- 共用的input樣式是否要抽共用 -->
      <input class="w-full form-control focus:outline-none focus:ring focus:ring-gray-300"  type="text"  minlength="4" maxlength="8" size="10" >
    
  </FormElementWrap>
  <div>Select input</div>
  <FormElementWrap
        :has-error="false"
        :msg="'this is error message'"
      >
      <!-- 共用的input樣式是否要抽共用 -->
    <Select class="w-full height-[100px]"  :input-style="'border h-auto pt-[3rem] rounded'"  :outline="false" v-model:selected-values="selectedValue1" :options="optionsOne" ></Select>
    </FormElementWrap>
  </div>
</template>
<style>

.select-form > div > :focus{
  outline: none;
}
</style>
