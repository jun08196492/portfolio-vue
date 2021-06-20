<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      class="elevation-3"
    />
  </v-container>
</template>
<script>
import {QnATitle, QnAList} from '@/assets/Data/QnA_data.js'
export default {
  name:'Qna',
  data () {
    return {
      headers: QnATitle,
      desserts: QnAList,
    }
  },
}
</script>
<style scoped>
  .elevation-3{
    cursor:pointer;
  }
</style>