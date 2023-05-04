<script setup lang="ts">
import { ref, watchEffect } from 'vue'
// visible
//要有 提交、取消等功能
//是否要設定最高高度、寬度，然後設置 overflow？


export interface Props {
  visible?: boolean,
  clickOutsideToClose?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  clickOutsideToClose: true
});
const isVisible = ref(false);
const emit = defineEmits(['update:visible']);
const handleVisible = ()=>{
  isVisible.value = false
  emit('update:visible', false)
}

const closeDialog = ()=>{
  handleVisible()
}


const handleOverlayClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const dialog = document.querySelector('.dialog');
  if (props.clickOutsideToClose && dialog && !dialog.contains(target)) {
    closeDialog();
  }
}

watchEffect(() => {
  isVisible.value = props.visible;
});
// 彈跳視窗的內容
</script>
<template>
  <!-- //@update:visible ?? -->
  <div v-if="visible" :visible="isVisible"  @update:visible="handleVisible" @click="handleOverlayClick">
    <div class="overlay w-full h-full bg-[#000]/[.5]  fixed z-[999] top-0 left-0" ></div>
    <div class="dialog">
      <slot></slot>
      <button class="bg-slate-300 rounded m-2 p-1" @click="closeDialog">close</button>
      <!-- {{ visible }}
      dialog -->
    </div>
  </div>
</template>
<style scoped>
/* .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:  rgba(0,0,0,0.5);
  z-index: 999;
} */

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  z-index: 1000;
}

</style>
