<script setup lang="ts">
import Upload from '../components/Upload.vue'

</script>
<template>
  <div>
    <Upload :accepted-formats="''" :multiple="false">
      <div>Upload what you want</div>
    </Upload>
      
      <Upload :accepted-formats="'.pdf,.xls'" :multiple="false">
        <div>Upload what you want(限制檔案)</div>
        <template #tip>
          <div class="text-slate-400">
            jpg/png files with a size less than 500KB.
          </div>
        </template>
      </Upload>

      <Upload :accepted-formats="'.pdf,.xls'" :multiple="false">
          <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
      <!-- <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
        </Upload>
  </div>
</template>
