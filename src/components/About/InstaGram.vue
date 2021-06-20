<template>
  <v-container>
    <div class="text-h5">
      INSTARGRAM
    </div>
    <v-row>
      <v-col>
        <v-row>
          <v-col
            v-for="(img, id) in imgs"
            :key="id"
            xs="12"
            sm="12"
            md="2"
            lg="2"
            xl="2"
          >
            <a
              :href="img.link"
              target="_blank"
            >
              <v-img
                height="400"
                :src="img.img"
              />
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {insta} from '@/assets/Data/About_data.js'
export default {
  data:()=>({
    imgs:insta
  })
}
</script>