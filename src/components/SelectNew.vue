<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { PropType } from 'vue'

//合併用法？公司
export interface Option {
  value: string;
  label: string;
}
export interface Props {
  options?: Option[],
  placeholder: string,
  clearable?: boolean,
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  // options: () => [
  //   { label: 'Option 1', value: 'option1' },
  //   { label: 'Option 2', value: 'option2' },
  //   { label: 'Option 3', value: 'option3' },
  // ],
});


const selectedOption = ref<{ label: string, value: string } | null >(null)
const selectedOptions = ref<{ label: string, value: string }[]>([])
const isDropdownOpen = ref(false)
const emit = defineEmits(["update:selected-values"]);

const selectedValues = computed({
  get() {
    return selectedOptions.value.map(option => option.value);
  },
  set(values) {
    // Note: we are using destructuring assignment syntax here.
    selectedOptions.value = props.options!.filter((option:{value: string}) => values.includes(option.value));
    emit('update:selected-values', props.multiple ? selectedOptions.value : selectedOption.value);
  }
})
const toggleDropdown = ()=>{
  isDropdownOpen.value = !isDropdownOpen.value
}

onMounted(() => {
  // console.log(props.options)
  // if (props.multiple) {
  //   selectedOptions.value = props.options.filter(option => props.value && props.value.map(v => v.value).includes(option.value));
  // } else {
  //   if( selectedOption.value !== undefined){
  //     selectedOption.value = props.options!.find((option, index) => option.value === props.value);
  //   }

  // }
})

const selectOption = (option:any)=>{
  if (props.multiple) {
    if (!selectedOptions.value.find(selected => selected.value === option.value)) {
      selectedOptions.value.push(option);
    }
  } else {
    selectedOption.value = option;
    isDropdownOpen.value = false;
    emit('update:selected-values', selectedOption.value);
  }
}

const clearSelection = ()=>{
  if (props.multiple) {
    selectedOptions.value = [];
    emit('update:selected-values', []);
  } else {
    selectedOption.value = null;
    emit('update:selected-values', null);
  }
}
///製作 chip\彈跳視窗


</script>
<template>
  <div class="select-container">
    <div class="select-input" @click="toggleDropdown">
      <span v-if="selectedOptions.length > 0">{{ selectedOptions.map(option => option.label).join(', ') }}</span>
      <span v-else-if="selectedOption?.hasOwnProperty('label')">{{ selectedOption?.label || ''}}</span>
      <span v-else>{{ placeholder }}</span>
      <!-- icon的引入! -->
      <div class="icons ml-auto flex items-center justify-center">
        <button v-if="clearable && (selectedOption || selectedOptions.length > 0)" @click.native.stop="clearSelection"><span class="material-icons-sharp block">cancel</span></button>
        <button ><span class="material-icons-outlined arrow-icon  block">expand_more</span></button>

      </div>
    </div>
    <ul v-if="isDropdownOpen" class="select-dropdown z-10">
      <li v-if="multiple" class="select-option" v-for="option in options" :key="option.value">
        <label>
          <input type="checkbox" :value="option.value" v-model="selectedValues">
          {{ option.label }}
        </label>
      </li>
      <li v-else class="select-option" v-for="option in options" :key="option.label" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.select-container {
  position: relative;
}

.select-input {
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.arrow-icon {
  margin-left: 8px;
  transition: transform 0.2s ease-in-out;
}

.arrow-up {
  transform: rotate(180deg);
}

.arrow-down {
  transform: rotate(0deg);
}

.clear-icon {
  margin-left: auto;
  cursor: pointer;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin-top: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.select-option {
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.2s ease-in-out;
}

.select-option:hover {
  background-color: #f2f2f2;
}

.select-option label {
  display: flex;
  align-items: center;
}

.select-option input[type="checkbox"] {
  margin-right: 8px;
}
</style>
