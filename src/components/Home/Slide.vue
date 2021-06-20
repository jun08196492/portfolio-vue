<template>
  <v-carousel
    cycle
    height="850"
    hide-delimiter-background
    show-arrows-on-hover
    interval="3000"
    align="center"
  >
    <v-carousel-item
      v-for="(slide, id) in slides"
      :key="id"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-img :src="slide.img" />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data:()=>({
    slides:[
      {id:0, img:require('@/assets/Home/SlideImg/slideimg1.jpg')},
      {id:1, img:require('@/assets/Home/SlideImg/slideimg2.jpg')},
      {id:2, img:require('@/assets/Home/SlideImg/slideimg3.jpg')},
      {id:3, img:require('@/assets/Home/SlideImg/slideimg4.jpg')},
    ]
  })
}
</script>