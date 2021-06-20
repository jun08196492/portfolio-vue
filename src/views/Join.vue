<template>
  <v-container>
    <v-text class="text-h5 text-center blue--text">
      회원가입
    </v-text>
    <v-row>
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col class="ma-5">
              <v-text-field
                counter="16"
                label="아이디"
              />
            </v-col>
            <v-col>
              <v-btn class="mt-10">
                중복확인
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            v-for="(join, id) in joins" 
            :key="id"
            class="ma-5"
          >
            <v-text-field
              :counter="join.counter"
              :label="join.label"
              :value="value"
              required
            />
          </v-row>
          <v-row class="ma-2">
            <v-col>
              <v-text-field 
                disabled
                hide-details
                value="생년월일 선택"
              />
            </v-col>
                        
            <v-col>
              <v-select
                v-model="select"
                :items="year"
                label="년도"
                required
              />
            </v-col>
            <v-col>
              <v-select
                v-model="select"
                items="1970"
                label="월"
                required
              />
            </v-col>
            <v-col>
              <v-select
                v-model="select"
                items="1970"
                label="일"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn
                color="success"
                class="mr-4"
                @click="validate"
              >
                가입완료
              </v-btn>
              <router-link to="/">
                <v-btn
                  color="warning"
                  class="white--text"
                >
                  돌아가기
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name:'Join',
  data: () => ({
    joins:[
      {id:0, counter:'20',label:'비밀번호'},
      {id:1, counter:'20',label:'비밀번호확인'},
      {id:2, counter:'0', label:'이름'},
      {id:3, counter:'0', label:'이메일'},
      {id:4, counter:'11', label:'전화번호'}
    ],
    select: null,
        
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    rules: [
      value => (value || '').length <= 20 || '최대 입력가능한 글자수는 20자 입니다',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))^/
        return pattern.test(value) || '다시확인해주세요'
      },
    ],
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.id = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>

<style scoped>
    a{text-decoration:none;}
</style>