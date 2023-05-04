<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
//icon 轉動
//rounded 判斷，如果是接在一起手風琴


export interface Props {
  shadow: boolean,
  rounded: boolean
}

const props = withDefaults(defineProps<Props>(), {
  shadow: true,
  rounded: false
});

const isOpen = ref(false)
const panelHeight = ref('')
const toggleExpansion = ()=>{
  isOpen.value = !isOpen.value

}

</script>
<template>
  
    <div class="header cursor-pointer flex px-4 py-4 justify-between hover:bg-zinc-300 min-h-[48px]  items-center" :class="[isOpen ? 'bg-zinc-300  shadow-none': '', shadow ? 'shadow-lg' : 'shadow-none',  { 'rounded-t-md': rounded && isOpen }, {'rounded-md': rounded && !isOpen }]" :shadow="shadow" @click="toggleExpansion">
        <slot name="header"></slot>
        <span class="material-icons-outlined block" :class="[isOpen ? 'rotate-180 transition ease-in-out duration-500' : '']">
          expand_more
        </span>
    </div>
    <transition name="panel-transition">
      <div v-if="isOpen" class="shadow-lg pt-2 pb-4 px-6  overflow-auto" :class="[isOpen && rounded ? 'rounded-b-md' : '']">
        <slot ></slot>
      </div>
    </transition>
  
</template>
<style>
.panel-transition-enter-active,
.panel-transition-leave-active {
  transition: max-height 0.1s ease,
}

.panel-transition-enter-from,
.panel-transition-leave-to {
  max-height: 0px;
}

.panel-transition-enter-to,
.panel-transition-leave-from {
  max-height: 300px;
}
</style>

<!-- 
v-expansion-panels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    width: 100%;
    position: relative;
    z-index: 1;
} -->

<!-- transition: .3s all cubic-bezier(.4,0,.2,1); -->
