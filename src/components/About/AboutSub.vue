<template>
  <v-container>
    <div class="text-h5">
      FACTORY
    </div>
    <v-row>
      <v-col
        cols="12"
      > 
        <v-row>
          <v-col
            v-for="(img, id) in imgs"
            :key="id"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-img
              height="400"
              :src="img.img"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {factory} from '@/assets/Data/About_data.js';
export default {
  data:()=>({
    imgs:factory,
  })
}
</script>