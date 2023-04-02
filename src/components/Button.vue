<script setup lang="ts">

// interface List {
//   id: number,
//   content: string
// }

defineProps<{
  disabled: boolean,
  //list :  {id: number , content: string}[] 可以写成行内的
  // list: List // 接口
}>()


</script>

<template>
  <button 
    class="button" 
    :class="[
      {
        'button--disabled': disabled,
      },
    ]" 
    :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style>
.button{
  display: block;
}
.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

