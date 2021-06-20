<template>
  <v-app>
    <about-title />
    <about-sub />
    <container-work />
    <insta-gram />
  </v-app>
</template>
<script>
import AboutTitle from '@/components/About/AboutTitle.vue'
import AboutSub from '@/components/About/AboutSub.vue'
import ContainerWork from'@/components/About/ContainerWork.vue'
import InstaGram from '@/components/About/InstaGram.vue'
export default {
  name:'About',
  components:{
    AboutTitle,
    AboutSub,
    ContainerWork,
    InstaGram,
  }
}
</script>