<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../components/Dialog.vue'


const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const openDialog = (dialogName: string) => {
  if (dialogName === 'dialogVisible1') {
    dialogVisible1.value = true
  } else if (dialogName === 'dialogVisible2') {
    dialogVisible2.value = true
  }
}

</script>

<template>
  <div>
    <div>example one</div>
    <button @click="openDialog('dialogVisible1')">打開對話框kkkk</button>
    <Dialog v-model:visible="dialogVisible1">
      <slot>
          <div class="p-2">
            <h1 >this is dialog</h1>
          </div>
      </slot>
    </Dialog>
    <div>{{ dialogVisible1 }}</div>
    <div class="mt-2">
    <h2>example Two</h2>
      <button @click="openDialog('dialogVisible2')">打開對話框2</button>
      <Dialog v-model:visible="dialogVisible2"> This is dialog 2 </Dialog>
      dialogVisible2 {{ dialogVisible2 }}
    </div>
  </div>
  
</template>
