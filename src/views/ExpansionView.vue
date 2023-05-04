<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExpansionPanels from '../components/ExpansionPanels.vue'
import ExpansionPanel from '../components/ExpansionPanel.vue'

const panelData = ref([
  {title:'title 1', context:'this is panel 1'},
  {title:'title 2', context:'this is panel 2'},
  {title:'title 3', context:'this is panel 3'},
  {title:'title 4', context:'this is panel 4'},
  {title:'title 5', context:'lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima'},
  {title:'title 6', context:'this is panel 6'},
  
])



</script>

<template>
  <div>
    <div>
      <h2>Example 1</h2>
      <ExpansionPanels>
        <ExpansionPanel :rounded="true">
          <template #header>
            面板 1
          </template>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
          </div>
        </ExpansionPanel>
      </ExpansionPanels>
    </div>
    <div>
      <h2>Example 2</h2>
        <ExpansionPanels class="my-3" v-for="panel in panelData" :key="panel.title">
          <ExpansionPanel :rounded="true">
            <template #header>
              {{ panel.title }}
            </template>
            <div>
              {{ panel.context }}
            </div>
          </ExpansionPanel>
        </ExpansionPanels>
    </div>
    <div>
      <h2>Example 3 連接在一起 </h2>
      <p>shadow 控制是否要有陰影</p>
      <p>rounded 控制是原本預設的圓角</p>
      <div class="wrapper-panel border-style">
            <ExpansionPanel v-for="(panel, i) in panelData" :key="panel.title" :shadow="false"  :rounded="false" >
              <template #header>
                {{ panel.title }}
              </template>
              <div>
                {{ panel.context }}
              </div>
            </ExpansionPanel>
      </div>
    </div>
    <div class="test">
      測試選到第一個子園素
      <div>

      </div>
      
    </div>
  </div>
</template>
<style>

.wrapper-panel {
  border: 2px solid orange;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
  overflow: hidden; 
  box-sizing: border-box;
}

.wrapper-panel > div:first-child {
  border-top-left-radius:.2rem;
  border-top-right-radius: .2rem;
}
.wrapper-panel > div:not(:last-child){
  border-bottom: 2px solid orange;
}
</style>
