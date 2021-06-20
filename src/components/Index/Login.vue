<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="black"
            dark
            right
            fixed
            v-bind="attrs"
            style="z-index:999"
            class="mt-10"
            v-on="on"
          >
            Login
          </v-btn>
          <v-btn
            v-show="fab"
            v-scroll="onScroll"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon size="50">
              mdi-chevron-up
            </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>LOGIN</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list
            three-line
            subheader
          >
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>ID</v-list-item-title>
                <v-list-item-subtitle>
                  <v-text-field
                    v-model="idValue" 
                    label="입력" 
                    solo
                  />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>PassWord</v-list-item-title>
                <v-list-item-subtitle>
                  <v-text-field
                    v-model="pwValue" 
                    label="입력"  
                    solo
                  />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-row class="text-center">
            <v-col>
              <v-btn class="ma-5">
                로그인
              </v-btn> 
            </v-col>
            <v-col>
              <v-btn @click="dialog=false">
                <router-link
                  to="/join"
                  class="black--text"
                >
                  회원가입
                </router-link>
              </v-btn>
              <v-btn class="ma-5">
                아이디/비밀번호 찾기
              </v-btn>
            </v-col>
          </v-row>
          <v-divider />
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data:() => ({
    dialog: false,
    idValue:'',
    pwValue: '',
    fab: false,
  }),
  computed: {
    progress (){
      return Math.min(100, this.idValue.legth * 15)
    },
    idColor(){
      return ['error', 'warning', 'success'][Math.floor(this.progress)/40]
    },
    pwColor () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    },
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style scoped>
  a{text-decoration:none;}
</style>