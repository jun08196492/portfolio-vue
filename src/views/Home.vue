<template>
  <v-app>
    <v-main>
      <slide />
      <content-about class="ma-10" />
      <best-item />
      <content-img-list class="ma-10" />
      <content-img />
      <find-map class="ma-10" />
    </v-main>
  </v-app>
</template>

<script>
import Slide from '@/components/Home/Slide.vue'
import BestItem from '@/components/Home/Items.vue'
import ContentAbout from '@/components/Home/ContentAbout.vue'
import ContentImg from '@/components/Home/ContentImg.vue'
import FindMap from '@/components/Home/FindMap.vue'
import ContentImgList from '@/components/Home/ContentImgList.vue'

export default {
  name: 'Home',

  components: {
    Slide,
    BestItem,
    ContentImg,
    ContentAbout,
    FindMap,
    ContentImgList,
  },
}
</script>
