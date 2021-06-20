<template>
  <v-app>
    <v-item-group active-class="primary">
      <v-container>
        <v-row>
          <v-col
            v-for="(title, id) in titles"
            :key="id"
            cols="12"
            md="4"
          >
            <router-link :to="title.link">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  class="d-flex align-center"
                  dark
                  height="50"
                  @click="toggle"
                >
                  <div
                    class="text-h5 flex-grow-1 text-center"
                  >
                    {{ title.name }}
                  </div>
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                    />
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-container fulid>
      <router-view>
        <v-app-bar>
        </v-app-bar>
      </router-view>
    </v-container>
  </v-app>
</template>
<script>

export default {
  name:'OnlineShop',
  components:{
  },
  data:()=>({
    titles:[
      {id:0, name:'Bowl', link:'/shopbowl'},
      {id:1, name:'Cup', link:'/shopcup'},
      {id:2, name:'Other', link:'/shopother'}
    ]
  })
}
</script>
<style scoped>
  a{text-decoration:none;}
</style>