<template>
  <div>
    <card
      class="text-yellow-700"
      title="TTTit is use___use  props title"
    ></card>
    <card>
      <template v-slot:title>
          This is use__slots  second___ slot title（outter）
      </template>
    </card>
    
    <!-- 單獨使用 -->
    <cardTitle class="text-yellow-700" title="This is aa long title"></cardTitle>
    <cardTitle>
      <template v-slot:title>
            This is a  second title
        </template>
    </cardTitle>
  </div>
</template>
<script setup lang="ts">
import card from '../components/Card/card.vue'
import cardTitle from '../components/Card/cardTitle.vue'

</script>
