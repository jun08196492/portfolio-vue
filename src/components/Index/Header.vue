<template>
  <v-tabs
    v-if="$vuetify.breakpoint.smAndUp"
    width="125"
    height="100"
  >
    <v-tab 
      disabled
    >
      <v-img
        src="@/assets/로고.png"
        width="125"
        height="90"
        class="ma-3"
      />
    </v-tab>
    <v-spacer />
    <v-spacer>
      <v-row class="ml-10">
        <v-col>
          <v-row>
            <a
              v-for="(sns, id) in snss"
              :key="id"
              :href="sns.href"
            >
              <v-img
                :src="sns.logo" 
                max-width="50" 
                max-height="50" 
                class="mt-12 mr-2"
              />
            </a>
          </v-row>  
        </v-col>
      </v-row>
    </v-spacer>
      
    <v-tab 
      v-for="(menu,id) in menus" 
      :key="id"
    >
      <router-link
        :to="menu.link"
        class="black--text"
      >
        <v-text
          style="
        display:inline-block; 
        width:120px; 
        padding:40px 0; 
        text-align:center;"
        >
          {{ menu.name }} 
        </v-text>
      </router-link>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  data:() => ({
    menus:[
      {id:0, name: 'Home', link:'/'},
      {id:1, name: 'About', link:'/about'},
      {id:3, name: 'Online-Shop', link:'/onlineshop'},
      {id:4, name: 'Event', link:'/event'},
      {id:5, name: 'Q&A',link:'/qna'},
      {id:6, name: 'Notice', link:'/notice'}
    ],
    snss:[
      {id:0, href:"#", logo:require('@/assets/Sns/네이버.png')},
      {id:1, href:'#', logo:require('@/assets/Sns/카카오톡.png')},
      {id:2, href:'#', logo:require('@/assets/Sns/facebook.png')},
      {id:3, href:'#', logo:require('@/assets/Sns/Instagram.png')},
      {id:4, href:'#', logo:require('@/assets/Sns/twiter.jpg')},
    ],
  })
}
</script>
<style scoped>
  a{text-decoration:none; color:black;}
  .mt-12{
    transition:1s
  }
  .mt-12:hover{
    opacity: 0.3;
  }
</style>