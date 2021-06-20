<template>
  <v-container>
    <v-text class="text-h4">
      EVENT
    </v-text>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-dialog
          transition="dialog-transition"
          max-width="1200"
          max-height="1200"
        >
          <template v-slot:activator="{on}">
            <v-card>
              <v-img
                style="cursor:pointer"
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
                v-on="on"
              >
                <v-card-title v-text="card.title" />
              </v-img>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  icon
                  @click="card.like = !card.like"
                >
                  <v-icon
                    v-if="card.like"
                    color="red"
                    @click="card.number--"
                  >
                    mdi-heart
                  </v-icon>
                  <v-icon
                    v-else
                    @click="card.number++"
                  >
                    mdi-heart
                  </v-icon>
                </v-btn>
                <div>
                  <span class="mx-3">{{ card.number }}</span>
                </div>
                <v-btn
                  color="purple"
                  icon
                  class="mx-10"
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>


          <template v-slot:default="dialog">
            <div style="cursor: pointer;">
              <v-img
                :src="card.src"
                width="100%"
                height="100%"
                @click="dialog.value = false"
              />
            </div>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: '5월 이벤트', src: require('@/assets/Event/향기_가로.jpg'), flex: 12, number:'34433', like:true,},
      { title: '랜덤박스', src: require('@/assets/Event/랜덤박스_세로.jpg'), flex: 4, number:'2334235',like:false,},
      { title: '경품이벤트', src: require('@/assets/Event/경품_가로.jpg'), flex: 8, number:'5332749',like:false,},
      { title: '빅 3', src: require('@/assets/Event/7636_9979_4315.png'), flex: 4, number:'3234384',like:false,},
      { title: '출석이벤트', src: require('@/assets/Event/출석부.jpg'), flex: 4, number:'3234384',like:false,},
      { title: '리뷰이벤트', src: require('@/assets/Event/리뷰.jpg'), flex: 4, number:'3234384',like:false,},
    ],
  }),
  methods:{
    clickColor(){
      this.color = !this.color
      this.cards.number++
    }
  }
}
</script>