<!-- <template>
  <div>
    <div class="form-check-label">
      <label class="inline-flex " >
        checkbox
        <input  type="checkbox" class='form-check-input absolute opacity-0 cursor-pointer' />
        <div class="jx-check-bg flex items-center justify-center w-[1.6rem] h-[1.6rem] border-[#ccc] mt-[0.4rem] border-[0.2rem] rounded-sm checked:bg-[#ccc] cursor-pointer bg-contain bg-no-repeat">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" class="w-full h-full checked:opacity-1">
            <polyline class="jx-check-path" fill="none" stroke="#FFF" stroke-linecap="square" stroke-width="2" points="3.4 8.9 6.2 11.8 12.6 5.4" transform="translate(-2 -3)" />
            </svg>
        </div>
      </label>
    </div>
  </div>
</template> -->
<script setup lang="ts">
import { ref } from 'vue'
const isChecked = ref(false)
const  toggleCheckbox = ()=>{
  console.log('click')
  isChecked.value = !isChecked.value
}
</script>
<template>
  <div class="">
    <div class="flex items-start">
      <label class="flex items-center text-sm text-gray-700">
        <input type="checkbox" class="hidden form-checkbox" @click="toggleCheckbox"  v-model="isChecked" />
        <div class="relative flex items-center justify-center  mr-2 rounded border-[0.2rem] border-gray-400 transition-colors w-[1.6rem] h-[1.6rem]" :class="{'bg-indigo-500': isChecked}">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" class="w-full h-full" v-if="isChecked">
              <polyline class="jx-check-path" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="2"
                  points="3.4 8.9 6.2 11.8 12.6 5.4" transform="translate(-2 -3)" />
                  </svg>
        </div>
        checkbox {{ isChecked }}
      </label>
    </div>
  </div>

</template>

<style >
/* .form-checkbox:checked {
  @apply bg-gray-400 border-gray-400;
}
.form-checkbox:focus {
  @apply outline-none ring-2 ring-offset-2 ring-offset-gray-100 ring-indigo-500;
}
.form-checkbox ~ .relative {
  @apply border-l-0 border-t-0 border-r-0 border-b-2;
}
.form-checkbox:checked ~ .relative svg {
  @apply opacity-100;
} */
/* .form-check-label {
  display: inline-flex;
  align-items: flex-start;
  font-size: 16px;
  color: #000;

} */

/* .form-check-input {

  position: absolute;
  opacity: 0;
  cursor: pointer;
} */

/* .jx-check-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .4rem;
  background-color: #fff;
  border: .2rem solid #ccc;
  transition: .2s;
 width: 1.6rem;
      height: 1.6rem;
      border-radius: .2rem;
      background-size: contain;
      background-repeat: no-repeat;
 
} */
 /* svg {
        width: 100%;
        height: 100%;
 } */
/* 打勾動畫 */
.jx-check-path {
  stroke-dasharray: 20;
}

 .form-check-label:hover .form-check-input:not(:disabled) {
    border-color: yellow;
  }
@keyframes checked {
  from {
    stroke-dashoffset: 20;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>
