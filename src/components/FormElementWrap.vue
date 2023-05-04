<script setup lang="ts">
import FormElementWrap from '../components/FormElementWrap.vue'
import { ref } from "vue"
export interface Props {
  name: string;
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'input-name'
});
</script>
<template>
  <div class="form-group">
    form element wrap
    <div class="input-wrapper relative" v-if="name.length > 0">
      <slot></slot>
      <input type="text" id="name" name="name"  minlength="4" maxlength="8" size="10" class="border">
      <label class="absolute top-[0.1rem] left-[0.1rem] right-[0.1rem]">{{ name }}</label>
    </div>
    <slot v-else></slot>
    <!-- v-show="hasError || hasSuccess || hasTips" -->
    <div class="form-text" >{{ msg }}</div>
  </div>
</template>
<style scoped lang="scss">
  .form-group {
			position: relative;
			margin-bottom: 1.6rem;
			// i{
			// 		position: absolute;
			// 		left: 1.2rem;
			// 		top: 1.2rem;
			// 		font-size: 2.2rem;
			// 		color: $jx-brand-primary;
			// }
    input{
      padding: 1.2rem 1.2rem 1.2rem 4.4rem;
    }
	}
</style>
