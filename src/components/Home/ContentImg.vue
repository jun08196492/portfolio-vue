<template>
  <v-app>
    <v-container>
      <v-row justify="space-around">
        <v-col
          v-for="(img, id) in imgs"
          :key="id" 
          xs="12"
          sm="12"
          md="3"
          lg="3"
          xl="3"
        >
          <v-dialog
            transition="dialog-transition"
            max-width="700"
            max-height="700"
          >
            <template v-slot:activator="{ on, }">
              <v-hover v-slot="{ hover }">
                <v-card
                  :class="{ 'on-hover': hover }"
                >   
                  <v-img
                    :src="img.list"
                    v-on="on"
                  />
                </v-card>
              </v-hover>
            </template>
            <template v-slot:default="dialog">
              <div style="cursor: pointer;">
                <v-img
                  :src="img.list"
                  @click="dialog.value = false"
                />
              </div>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import {img} from '@/assets/Data/Home_data.js'
export default {
  data:()=>({
    imgs:img,
  })
}
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
  cursor: pointer;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

</style>