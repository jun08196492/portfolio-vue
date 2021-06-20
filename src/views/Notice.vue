<template>
  <v-app>
    <v-container>
      <div class="text-h3 mb-5">
        공지사항
      </div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(notice,id) in Notices"
          :key="id"
        >
          <v-expansion-panel-header 
            class="text-h6 black--text mt-1" 
            color="primary lighten-2"
          >
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-row>
                  <v-col>
                    {{ notice.title }}
                  </v-col>
                  <v-col class="text-right">
                    <span
                      style="font-size:0.7em;"
                    >{{ `작성일/${notice.day}` }}</span>
                  </v-col>
                  <v-col
                    style="font-size:0.8em"
                    class="text-center"
                  >
                    [ 고 은 ]
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="mt-5">
            {{ notice.text1 }} <br><br>
            {{ notice.text2 }} <br><br>
            {{ notice.text3 }} <br><br>
            {{ notice.text4 }} <br><br>
            {{ notice.text5 }} <br><br>
            {{ notice.text6 }} <br><br>
            {{ notice.text7 }} <br><br>
            {{ notice.text8 }} <br><br>
            {{ notice.text9 }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
</template>
<script>
import {Notice} from '@/assets/Data/Notice_data.js'
export default {
  name:'Notice',
  data:()=>({
    Notices:Notice,
  }),
  methods: {
    handleNewLine(str) {    
      return String(str).replace(/(?:\r\n|\r|\n)/g,"</br>");
    }
  }
}
</script>