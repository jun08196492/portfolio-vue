<template>
  <v-app>
    <v-container justify="center">
      <v-row>
        <v-col 
          v-for="(img, id) in imgs"
          :key="id"
          class="d-flex child-flex"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <v-img
            :src="img.list"
            height="200"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import {list} from '@/assets/Data/Home_data.js'
export default {
  data:()=>({
    imgs:list,
  })
}
</script>