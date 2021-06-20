<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="(bowl, id) in Bowls"
              :key="id"
              xs="12"
              sm="12"
              md="3"
              lg="3"
              xl="3"
            >
              <v-card>
                <a href="#">
                  <v-img
                    style="transition:1s"
                    class="opacity"
                    height="350"
                    :src="bowl.img"
                  />
                </a>
                
                <v-card-title>{{ bowl.name }}</v-card-title>
                <v-divider class="mx-4" />
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :value="bowl.star"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    />
                  
                    <div class="grey--text ms-4">
                      {{ bowl.star }} {{ `(${bowl.hit})` }}
                    </div>
                  </v-row>
                  <div class="my-4 text-subtitle-1">
                    {{ `${bowl.price}원` }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import {Bowl} from '@/assets/Data/shop_data.js'
export default {
  name:'ShopBowl',
  data: () => ({
    Bowls:Bowl,
  }),
}
</script>
<style scoped>
  .opacity:hover{
    opacity: 0.6;
  }
</style>