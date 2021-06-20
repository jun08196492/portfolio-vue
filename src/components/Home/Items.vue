<template>
  <v-app>
    <v-container>
      <!-- 베스트 -->
      <v-row>
        <v-col>
          <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="1920"
            height="400"
          >
            <div class="text-h6 text-center text-h4 pa-5">
              BEST
            </div>
            <v-slide-group
              v-model="bestModel"
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="(item, id) in bestItems"
                :key="id"
                v-slot="{toggle}"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="ma-4"
                    height="200"
                    width="300"
                    @click="toggle"
                  >
                    <v-img
                      :src="item.img"
                      height="250"
                    >
                      <div
                        v-if="hover"
                        class="d-flex text-center transition-fast-in-fast-out white darken-2 v-card--reveal text-h5 black--text"
                        style="height: 100%;"
                      >
                        <br>
                        {{ item.name }} <br>
                        {{ item.price +'원' }}
                      </div>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
        
        <!-- 신상품 -->

        <v-col>
          <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="1920"
          >
            <div class="text-h6 text-center text-h4 pa-5">
              NEW
            </div>
            <v-slide-group
              v-model="newModel"
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="(item, id) in newItems"
                :key="id"
                v-slot="{toggle}"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="ma-4"
                    height="200"
                    width="300"
                    @click="toggle"
                  >
                    <v-img
                      :src="item.img"
                      height="250"
                    >
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h5 black--text text-center"
                        style="height: 100%;"
                      >
                        <br>
                        {{ item.name }} <br>
                        {{ item.price + '원' }}
                      </div>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>

        <!-- 할인 -->
        <v-col>
          <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="1920"
          >
            <div class="text-h6 text-center text-h4 pa-5">
              SALE
            </div>
            <v-slide-group
              v-model="saleModel"
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="(item, id) in saleItems"
                :key="id"
                v-slot="{toggle}"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="ma-4"
                    height="200"
                    width="300"
                    i
                    @click="toggle"
                  >
                    <v-img
                      :src="item.img"
                      height="250"
                    >
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h5 black--text text-center"
                        style="height: 100%;"
                      >
                        <p>
                          <br>
                          {{ item.name }} <br>
                          <span style="text-decoration:line-through">{{ item.price + '원' }}</span> <br>
                          {{ item.sale + '원' }}
                        </p>
                      </div>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import {bestItem , newItem, saleItem} from '@/assets/Data/Home_data.js'
export default {
  data: () => ({
    bestModel: null,
    newModel:null,
    saleModel:null,
    bestItems:bestItem,
    newItems:newItem,
    saleItems:saleItem,
  }),
}
</script>

<style>
.v-card--reveal {
  display:flex;
  justify-content:center;
  bottom: 0;
  opacity:0.7;
  position: absolute;
  width: 100%;
}
</style>