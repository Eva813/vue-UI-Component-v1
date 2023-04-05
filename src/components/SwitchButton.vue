<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'


export interface Props {
  disabled: boolean,
  switchWidth: boolean,
  color?: 'blue' | 'green' | 'red',
  colorClasses?: {
    [key: string]: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  switchWidth: true
})

const colorClasses =ref({
  blue: 'peer-checked:bg-blue-600 peer-focus:ring-blue-300',
  green: 'peer-checked:bg-green-600 peer-focus:ring-green-300',
  red: 'peer-checked:bg-red-600 peer-focus:ring-red-300',
})

const colorClass = computed(() => {
  if (props.color && colorClasses.value[props.color]) {
    return colorClasses.value[props.color];
  }
  return '';
});

const divRef= ref<HTMLTextAreaElement | null>(null);
const translateX = ref('50px')

onMounted(() => {
  console.log('ref', divRef.value!.clientWidth)
  // divWidth.value = divRef.value!.clientWidth;
  translateX.value = `${divRef.value!.clientWidth - 25}px`
  console.log('ps', translateX.value)

});



</script>

<template>
  <div >
    <label class="relative inline-flex items-center cursor-pointer">
    <slot name="left-label"></slot>
    <input type="checkbox" value="" class="sr-only peer" :disabled="disabled">
    <div ref="divRef" class="h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  dark:border-gray-600  peer-checked:after:translate-x-[var(--custom-translate-x)]"  :class="[ colorClass, [switchWidth ? 'w-11' : 'w-auto']]" :style="{ '--custom-translate-x': translateX }">{{ translateX }}
      <slot name="middle-label" class="middle-label"></slot>
      
    </div>
    <slot name="right-label"></slot>
  </label>
  </div>
</template>
<style scoped>
:root {
  --custom-translate-x: 50px;
}
</style>


<!-- //peer-checked:after:translate-x-[100%]  -->
