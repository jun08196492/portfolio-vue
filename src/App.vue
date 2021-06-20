<template>
  <v-app>
    <Header />
    <login />

    <v-app>
      <router-view z-index="0">
        <Home />
      </router-view>
    </v-app>
    <Footer />
  </v-app>
</template>

<script>

import Home from '@/views/Home.vue'
import Login from '@/components/Index/Login.vue'
import Header from '@/components/Index/Header.vue'
import Footer from '@/components/Index/Footer.vue'

export default {
  name: 'App',
  components:{
    Login,
    Home,
    Header,
    Footer
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
