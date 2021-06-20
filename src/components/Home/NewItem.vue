<template>
  <v-container>
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="1920"
    >
      <div class="text-h6 text-center text-h4 pa-5">
        NEW
      </div>
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(item, id) in items"
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
  </v-container>
</template>
<script>
export default {
  data: () => ({
    model: null,
    items:[
      {id:0, name:'가로접시', price:'50,000', img:require('@/assets/Home/NewItem/가로접시.jpg')},
      {id:1, name:'깊은볼', price:'27,000', img:require('@/assets/Home/NewItem/깊은볼.jpg')},
      {id:2, name:'나즌라이스볼', price:'40,000', img:require('@/assets/Home/NewItem/나즌라이스볼.jpg')},
      {id:3, name:'너츠볼', price:'35,000', img:require('@/assets/Home/NewItem/너츠볼.jpg')},
      {id:4, name:'넉넉한볼', price:'129,000', img:require('@/assets/Home/NewItem/넉넉한볼.jpg')},
      {id:5, name:'대야볼', price:'18,000', img:require('@/assets/Home/NewItem/대야볼.jpg')},
      {id:6, name:'딥타원접시', price:'42,000', img:require('@/assets/Home/NewItem/딥타원접시.jpg')},
      {id:7, name:'밥그릇', price:'22,000', img:require('@/assets/Home/NewItem/밥그릇.jpg')},
      {id:8, name:'보트볼', price:'20,000', img:require('@/assets/Home/NewItem/보트볼.jpg')},
      {id:9, name:'소스팟', price:'16,000', img:require('@/assets/Home/NewItem/소스팟.jpg')},
      {id:10, name:'에그볼', price:'15,000', img:require('@/assets/Home/NewItem/에그볼.jpg')},
      {id:11, name:'저그', price:'25,000', img:require('@/assets/Home/NewItem/저그.jpg')},
      {id:12, name:'일자찬기', price:'15,000', img:require('@/assets/Home/NewItem/일자찬기.jpg')},
      {id:13, name:'티잔', price:'33,000', img:require('@/assets/Home/NewItem/티잔.jpg')},
      {id:14, name:'피쉬접시', price:'55,000', img:require('@/assets/Home/NewItem/피쉬접시.jpg')},
      {id:15, name:'피크닉볼', price:'69,000', img:require('@/assets/Home/NewItem/피크닉볼.jpg')},
    ]
  }),
}
</script>

<style>
.v-card--reveal {
    transition:1s;
  bottom: 0;
  opacity:0.6;
  position: absolute;
  width: 100%;
}
</style>