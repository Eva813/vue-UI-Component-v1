<script setup lang="ts">
import { ref, watchEffect } from "vue";

const props = withDefaults(defineProps<{
  multiple: boolean;
  acceptedFormats: string;
}>(), {
  multiple: false,
  acceptedFormats: ''
});

const fileList: any = ref([]);
const fileInput = ref<HTMLInputElement | null>(null)

const openFilePicker = () => {
  fileInput.value!.click();
}
//image/* (包含 jpg、png、gif 等各種圖檔) ; .pdf,.xls

const handleFileChange = (event: Event) => {
  //event.target.files 的 typeScript
  const inputElement = (event.target as HTMLInputElement);
  const files = inputElement.files;
  if( files === null) return
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    //檢查文件格式
    if (!isValidFormat(file)){
      // 如果文件格式不符合要求，可以根据需求进行处理，例如阻止文件添加或给出错误提示
      console.log('Invalid file format:', file.name);
      continue; // 跳过当前文件，继续处理下一个文件
    }
    fileList.value.push(file);
  }
  inputElement.value = ''; // 清空選擇的文件
}

const formatFileSize = (size: number) => {
  if (size === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const digitGroups = Math.floor(Math.log10(size) / Math.log10(1024));
  const formattedSize = (size / Math.pow(1024, digitGroups)).toFixed(2);
  return `${formattedSize} ${units[digitGroups]}`;
}

const isValidFormat = (file: File) => {
  console.log('valid', file)
  if(props.acceptedFormats === ''){
    return true;
  }
  const acceptedFormats = props.acceptedFormats.split(',').map(format => format.trim().slice(1));
  const fileExtArray = file.name.split('.');
  const fileExt = fileExtArray.length > 0 ? fileExtArray.pop()?.toLowerCase() : null;
  const fileType = file.type.toLowerCase();
  console.log('All', acceptedFormats ,'2', fileExt, '3', fileType )
  return acceptedFormats.some(format =>  {
      // 检查文件擴展名或 MIME 类型是否与允许的格式匹配
      return fileExt === format.toLowerCase() || fileType === format.toLowerCase();
    });
} 

</script>

<!-- <script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.fileList.push(file);
      }
      event.target.value = null; // 清空選擇的文件
    },
    formatFileSize(size) {
      if (size === 0) return '0 B';
      const units = ['B', 'KB', 'MB', 'GB', 'TB'];
      const digitGroups = Math.floor(Math.log10(size) / Math.log10(1024));
      const formattedSize = (size / Math.pow(1024, digitGroups)).toFixed(2);
      return `${formattedSize} ${units[digitGroups]}`;
    }
  }
};
</script> -->


<template>
  <div class="upload">
    <input 
      ref="fileInput" 
      type="file" 
      :multiple="multiple" 
      @change="handleFileChange" 
      style="display: none"
      :accept="acceptedFormats"
      />
    <div class="upload-button" @click="openFilePicker">
      <slot></slot>
    </div>
    <slot name="tip" ></slot>
    <div class="file-list">
      <div v-for="file in fileList" :key="file.id" class="file-item">
        <span>{{ file.name }}</span>
        <span class="file-size">{{ formatFileSize(file.size) }}</span>
      </div>
    </div>
  </div>
</template>



<style>
.upload {
  /* display: inline-block; */
}

.upload-button {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.file-list {
  margin-top: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.file-size {
  margin-left: 8px;
  color: #888;
}
</style>
