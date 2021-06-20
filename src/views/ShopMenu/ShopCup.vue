<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="(cup, id) in Cups"
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
                    :src="cup.img"
                  />

                </a>
               
                <v-card-title>{{ cup.name }}</v-card-title>
                <v-divider class="mx-4" />
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :value="cup.star"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    />
                  
                    <div class="grey--text ms-4">
                      {{ cup.star }} {{ `(${cup.hit})` }}
                    </div>
                  </v-row>
                  <div class="my-4 text-subtitle-1">
                    {{ `${cup.price}원` }}
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
import {Cup} from '@/assets/Data/shop_data.js'
export default {
  data: () => ({
    Cups:Cup,
  }),
}
</script>
<style scoped>
  .opacity:hover{
    opacity: 0.6;
  }
</style>