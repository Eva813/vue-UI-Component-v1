<script setup lang="ts">
import Checkbox from '../components/Checkbox.vue'
import {ref} from "vue"


const selectedPeople = ref([]);
const isSelected = ref(false);
const isSelectedAgree = ref(false);
const people = ref([
  {
    name: "William",
    age: 30,
    sex: "Male"
  },
  {
    name: "Thomas",
    age: 24,
    sex: "Male"
  },
  {
    name: "Jennifer",
    age: 20,
    sex: "Female"
  }
]);


</script>

<template>
  <div>
    <h2 class="text-xl">單一個 checkbox</h2>
    <Checkbox :disabled="false" :label="'單一'" v-model:model-value="isSelected" ></Checkbox>
    <div>
      <h2>有多個 checkbox 並透過勾選存於同一個陣列中</h2>
      <p>勾選到的資料：{{ selectedPeople }}</p>
      <template v-for="person in people" :key="person.name" >
        <Checkbox  :disabled="false" :label="person.name" v-model:model-value="selectedPeople" :value="person"
        ></Checkbox>
      </template>
    </div>
    <div>
      <h2>label 插入更多資訊</h2>
      <Checkbox :disabled="false" v-model:model-value="isSelectedAgree">
        <template v-slot:labelContext>
          <div>
            I agree that <a>agreement doc</a>
          </div>
        </template>
      </Checkbox>
    </div>
  </div>
</template>
