<template>
  <v-app>
    <v-container>
      <v-carousel
        hide-delimiters
        height="900"
        d-flex
        justify="center"
      >
        <v-carousel-item
          v-for="(map,id) in maps"
          :key="id"
        >
          <div class="text-h4 pa-4">
            Address
          </div>
          <v-row>
            <v-col>
              <iframe
                :src="map.link"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              />
            </v-col>
            <v-col class="mt-3">
              <v-row justify="space-around">
                <v-card width="700">
                  <v-img
                    width="100%"
                    height="300"
                    :src="map.img"
                  />

                  <v-card-text>
                    <v-card-title class="black--text text-h5">
                      <p class="ml-3">
                        {{ map.name }}
                      </p>
                    </v-card-title>

                    <v-timeline
                      align-top
                      dense
                    >
                      <v-timeline-item
                        :color="map.color"
                        small   
                      >
                        <div class="font-weight-normal">
                          <strong class="text-h6">Address.</strong> 
                          <p>{{ map.address }}</p>
                          <strong class="text-h6">Tel.</strong>
                          <p>{{ map.tel }}</p>
                          <strong class="text-h6">Open.</strong>
                          <p>{{ map.open }}</p>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>
<script>
import {map} from '@/assets/Data/Home_data.js'
export default {
  data:()=>({
    maps:map,
  })
}
</script>