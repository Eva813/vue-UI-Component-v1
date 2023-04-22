<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
export interface Props {
  chipStyle: string,
  closable: boolean,
  iconName?: string,
  iconColor?: string,
  iconShape?: string,
  iconPosition?: string
}

const props = withDefaults(defineProps<Props>(), {
  chipStyle: '',
  closable: false,
  iconColor: 'text-gray-50',
  iconShape: 'material-icons'
});

const emits = defineEmits(['delete'])

const chipClasses = computed(()=>{
  return `${props.chipStyle}`
})
const contentRef = ref<HTMLTextAreaElement | null>(null)
//此刪除事件在內層還是要放，只是沒有傳遞子層數據出去
const deleteChip = ()=> {
  emits('delete')
}

</script>
<template>
  <div :class="[chipClasses, iconPosition]" >
    <template v-if="iconPosition === 'left'">
        <template  v-if="iconName" >
          <span :class="[iconShape, iconColor, 'p-1']"   >{{ iconName }}</span>
        </template>
        </template>
    <slot></slot>
    <button v-if="closable" @click="deleteChip" class="close-button">×</button>
      <template v-if="iconPosition === 'right'">
          <template  v-if="iconName" >
            <span :class="[iconShape, iconColor, 'p-1']">{{ iconName }}</span>
          </template>
      </template>
  </div>
</template>



<style scoped>
.my-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  padding: 0;
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
