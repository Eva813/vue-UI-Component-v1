<script setup lang="ts">
export interface Props {
  inputValue?: string,
  focusColor?: string,
  defaultIcon: boolean,
  placeholder: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultIcon: false,
  placeholder: 'Enter what you what to search...'
})

const emit = defineEmits(["update:input-value","submitValue"]);
const updateValue = (event:any) => {
  emit("update:input-value", event.target.value);
};
const submitEvent = ()=>{
  emit('submitValue')
}
</script>
<template>
  <form>   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div v-if="defaultIcon" class="absolute inset-y-0 left-0 flex z-10 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"      stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <slot name="icon"></slot>
          <input type="search" id="default-search" :class="['block', 'w-full', 'p-4', 'pl-10', 'text-sm', 'text-gray-900' ,'border', 'border-gray-300', 'rounded-lg', 'bg-gray-50',  'dark:bg-gray-700', 'dark:border-gray-600', 'dark:placeholder-gray-400', 'dark:text-white','focus:outline-none',, 'focus:ring-2',[focusColor ? focusColor : 'focus:ring-blue-600'] ]" :placeholder=placeholder required :value="inputValue" @input="updateValue" >
          <slot name="button" @click="submitEvent"></slot>
      </div>
  </form>
</template>

