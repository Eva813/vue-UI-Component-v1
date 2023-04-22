<script setup lang="ts">
import { ref } from 'vue'

export interface Props {
  options?: { label: string, value: string }[],
  multiple?:boolean,
  selectedValues?: string | string[],
  placeholder?:string 
}

const props= withDefaults(defineProps<Props>(), {
  options:()=>[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  multiple: false,
  // selectedValues: multiple ? [] : '',
  placeholder:'Choose...'
});

//readonly 控制可否輸入
const  dropdownOpen = ref(false)

const toggleDropdown = ()=>{
  dropdownOpen.value = !dropdownOpen.value
}

// const selectedValues = ref('')
const emit = defineEmits(["update:selected-values"]);

//多選、單選
const selectOption =(option: { label: string, value: string })=>{
  console.log(option)
  if(props.multiple){
    // if (props.selectedValues!.length === 0) {
    //   return props.placeholder
    // } else {
    //   return props.selectedValues!.join(', ')
    // }
    // if(!props.selectedValues) return props.placeholder
    console.log('prop', props.selectedValues)
    if (props.selectedValues?.includes(option.label)) {
      return; // 如果已經存在，則不加入
    }

    const newArr = props.selectedValues ?  [...props.selectedValues, option.label] : [option.label] ;
    emit("update:selected-values", newArr);
    
  }else {
    emit("update:selected-values", [option.label]);
  }

  
}

</script>
<template>
  <div class="select-container mt-2">
    <div class="relative"  @click="toggleDropdown">
      <input type="text" class="block min-h-[auto] w-full outline rounded-sm cursor-pointer py-[0.32rem] px-3" :value="Array.isArray(props.selectedValues) ? props.selectedValues?.join(', ') : props.selectedValues" :placeholder="placeholder">
      <span class="absolute right-2 text-[0.8rem] cursor-pointer peer-focus:text-blue-600  top-2">▼</span>
    </div>
    <div v-if="dropdownOpen" class="dropdown-menu mt-3  border-slate-300 shadow-lg shadow-slate-300/50">
      <div class="option-list">
        <div v-for="(option, index) in options"
              :key="index"
              class="option px-[16px] py-[8px] cursor-pointer hover:bg-slate-300"
              @click="selectOption(option)"
              >
            {{ option.label }}
          </div>
      </div>
    </div>
  </div>
</template>
