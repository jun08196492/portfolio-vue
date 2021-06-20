<template>
  <v-app class="ma-10">
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <p class="text-center text-h2 red--text">
            HOW WE WORKS
          </p>  
        </v-row>
        <v-row
          class="text-h6 mt-10"
          justify="center"
        >
          <p>‘고은’은 도자기 관련된 것은 어떠한 제품이라도 주문 생산이 가능합니다.</p>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="(work, id) in works"
            :key="id"
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-col>
              <v-card
                height="500"
                align="center"
              >
                <v-icon
                  size="100"
                  class="mt-10"
                >
                  {{ work.icon }}
                </v-icon>
                <v-card-text>
                  <v-card-text class="text-h5 text-center">
                    {{ work.title }}
                  </v-card-text><br><br>
                  {{ work.message1 }}<br>
                  {{ work.message2 }}<br>
                  {{ work.message3 }}<br>
                  <p class="red--text">
                    {{ work.red }}
                  </p> 
                </v-card-text>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import {work} from '@/assets/Data/About_data.js'
export default {
  data:() => ({
    works:work,
  })
}
</script>