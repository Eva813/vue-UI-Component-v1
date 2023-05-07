<script setup lang="ts">
import FormElementWrap from '../components/FormElementWrap.vue'
import { ref } from "vue"
export interface Props {
  name: string;
  msg?: string;
  hasError: boolean;
  hasSuccess?: boolean;
  hasTips?: boolean;
  //inputStyle 針對輸入框加入樣式
  inputStyle?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'input-name'
});
</script>
<!-- :class="['border','h-auto', 'min-h-[100px]', 'pt-[3.4rem]', { 'border-red-500': hasError }]" -->
<template>
  <div :class="['form-group']">
    form element wrap: {{ inputStyle }}
    <div class="input-wrapper relative" v-if="name.length > 0">
      <div class="input" :class="inputStyle">
        <slot ></slot>
      </div>
      <!-- <input type="text" id="name" name="name"  minlength="4" maxlength="8" size="10" > -->
      <label class="absolute top-[0.1rem] left-[0.1rem] right-[0.1rem] px-[1.6rem] pt-[1rem]">{{ name }}</label>
    </div>
    <slot v-else></slot>
    <!-- v-show="hasError || hasSuccess || hasTips" -->
    <div :class="['form-text', 'py-[0.6rem]',{ 'text-red-500': hasError }]" v-show="hasError || hasSuccess || hasTips" >{{ msg }}</div>
  </div>
</template>
<style scoped lang="scss">
  .form-group {
			position: relative;
			margin-bottom: 1.6rem;
    input{
      padding: 1.2rem 1.2rem 1.2rem 4.4rem;
    }
	}
</style>
