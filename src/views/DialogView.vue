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
    <Dialog v-model:visible="dialogVisible1">111</Dialog>
    <div>{{ dialogVisible1 }}</div>
    <div>example Two</div>
    <button @click="openDialog('dialogVisible2')">打開對話框2</button>
    <Dialog v-model:visible="dialogVisible2">rrrrr</Dialog>
    dialogVisible2 {{ dialogVisible2 }}
  </div>
  
</template>
