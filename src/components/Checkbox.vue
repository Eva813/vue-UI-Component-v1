<script setup lang="ts">
import { ref, computed } from 'vue'
// 外層傳給內的值 label? and value
//Indeterminate
//參考：https://dev.to/maxwelladapoe/creating-a-custom-checkbox-component-in-vue-3-a-better-approach-2jjd
//當 disable 的時候顏色調整
export interface Props {
  // disabled: boolean,
  modelValue: object[] | boolean,
  value?: object | boolean,
  label?: string,
  indeterminate?: boolean,
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  indeterminate: false
});

const isChecked = ref(false)
const emit = defineEmits(["update:modelValue"]);
const checkedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value)
    isChecked.value = !isChecked.value;
    emit("update:modelValue", value);
  },
});

</script>
<template>
  <div class="">
    <div class="flex items-start">
      <label class="flex items-center text-sm text-gray-700">
        <input type="checkbox" class="hidden form-checkbox"  :value="value" v-model="checkedValue" :disabled="disabled" />
        <div class="relative flex items-center justify-center  mr-2 rounded border-[0.2rem] border-gray-400 transition-colors w-[1.6rem] h-[1.6rem] hover:shadow-md" :class="{'bg-gray-400': isChecked , 'is-indeterminate': indeterminate }">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" class="w-full h-full" v-if="isChecked">
              <polyline class="jx-check-path" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="2"
                  points="3.4 8.9 6.2 11.8 12.6 5.4" transform="translate(-2 -3)" />
                  <!-- 替勾選加入動畫 -->
                  <animate attributeName="stroke-dashoffset" dur="300ms" begin="0s" from="20" to="0" fill="freeze" />
              </svg>
        </div>
        {{ label }}
        <slot name="labelContext"></slot>
      </label>
    </div>
  </div>

</template>

<style>

/* 打勾動畫 */
.jx-check-path {
  stroke-dasharray: 20;
}


@keyframes checked {
  from {
    stroke-dashoffset: 20;
  }

  to {
    stroke-dashoffset: 0;
  }
}

.is-indeterminate {
  background-color: #ccc;
  background-image: url('../assets/icon-checked-partial.svg');
  background-repeat: no-repeat;
  background-position: center;
  color: aliceblue;
  }
</style>
