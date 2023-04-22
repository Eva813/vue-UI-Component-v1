<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import Chip from '../components/Chip.vue'
const contentRef = ref<HTMLTextAreaElement | null>(null)
const contentRefChip = ref<HTMLTextAreaElement | null>(null)
const deleteChip = () => {
  const content = contentRef.value?.textContent;
  const refChipContent = contentRefChip.value?.textContent;
  console.log('out',content);
  console.log('out2', refChipContent);


}

//傳入陣列 chip
const tags = ref(['tag1', 'tag2', 'tag3'])
const deleteTags = (item:string)=>{
  console.log('delete', item)
}
</script>
<template>
  <div>
    <div>使用方法說明：
      <p>使用 chipStyle 替 chip 加入基本外型及排版 </p>
      <p>使用 iconName, iconPosition, iconShape 來加入 icon 以及放置位置 </p>
      <p>使用 closable 來決定這個 chip 有無刪除按鈕 </p>
    </div>
      <Chip class="mb-2 mt-2" :chipStyle="'bg-[#ccc] text-red-800 w-[150px] h-5 flex items-center justify-center rounded-2xl p-[15px]'" :closable="false" :iconName="'account_circle'" :iconPosition="'left'">
        <div>我的標籤</div>
      </Chip>
      <div>other example</div>
        <Chip class="mb-2" :chipStyle="'bg-red-300 text-red-800 w-[100px] h-5 flex items-center justify-center rounded-xl'" :closable="true" @delete="deleteChip">
          <div ref="contentRefChip">Chip</div>
        </Chip>
      <div>add Icon</div>
        <Chip class="mb-2" :chipStyle="'bg-[#ccc] text-red-800 w-[150px] h-5 flex items-center justify-center rounded-xl p-[15px]'" :closable="true" :iconShape="'material-icons-sharp'" :iconName="'thumb_up'" :iconPosition="'right'" @delete="deleteChip">
          <div ref="contentRef">example 2</div>
          <!-- chip -->
        </Chip>
        <div>如果 chip 帶入的是多個標籤</div>
        <Chip class="mb-2" :chipStyle="'bg-[#ccc] text-red-800 w-[150px] h-5 flex items-center justify-center rounded-xl p-[15px]'" :closable="true" :iconShape="'material-icons-sharp'" :iconName="'thumb_up'" :iconPosition="'right'" @delete="deleteTags(item)"  v-for="item in tags">
            <div >{{ item }}</div>
          </Chip>
  </div>
</template>
