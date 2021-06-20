<template>
  <v-app>
    <v-content justify="center">
      <div class="text-center">
        <div class="text-h4 pl-10">
          About Us
          <v-dialog
            v-model="dialog"
            width="500"
            :fullscreen="$vuetify.breakpoint.mobile"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="red lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
              >
                자세히
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                About
              </v-card-title>

              <v-card-text class="pa-7 text-h9 text-justify">
                최고의 품질, 최고의 서비스, 다양한 디자인 개발이라는 경영 이념과 20여 년의 경험을 바탕으로
                기존 대형 업체들의 일률적인 생산 원칙을 깨고 제품의 실용성과 다양한 디자인 
                변화를 통해 유행을 주도하는 업체의 선두주자로 발돋움하고 있습니다.                    
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  닫 기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-content>


    <v-content height="700">
      <v-row align="center">
        <v-item-group
          v-model="window"
          class="shrink mr-6"
        >
          <v-item
            v-for="n in 3"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <div>
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon size="40">
                  mdi-record
                </v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>
        <v-col>
          <v-window
            v-model="window"
            class="elevation-1"
            vertical 
          >
            <v-window-item
              v-for="(about, id ) in abouts"
              :key="id"
            >
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col d-flex>
                      <v-avatar
                        :color="about.color"
                        class="pa-2 ma-4"
                      />
                      <strong class="text-h6 ma-6 text-justify">{{ about.title }}</strong>
                      <p class="pa-5">
                        {{ about.message1 }} <br><br>
                        {{ about.message2 }} <br><br>
                        {{ about.message3 }} <br><br>
                        {{ about.message4 }} <br><br>
                        {{ about.message5 }}
                      </p>
                    </v-col>
                    <v-col>
                      <v-img
                        :src="about.img"
                        width="100%"
                        height="100%"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import {about} from '@/assets/Data/Home_data.js'
export default {
  data:() => ({
    window:0,
    show:false,
    dialog: false,
    abouts:about,
  }),
  methods:{
    clickShow(){
      this.show = !this.show
    }
  }
}
</script>