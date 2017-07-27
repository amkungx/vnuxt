<template>
  <div class="my-container">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm6 md4 v-for="(item, index) in items" :key="item.id" @click="readPost(item.id)">
        <v-card tile>
          <v-card-media :src="'http://lorempixel.com/640/320/people/'+index+'/'" height="200px">
          </v-card-media>
          <!-- <img v-lazy="'http://lorempixel.com/640/320/people/'+index+'/'" height="200px" /> -->
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.name}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat class="orange--text">Share</v-btn>
            <v-btn flat class="orange--text">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <img v-lazy="'http://lorempixel.com/640/320/people/0/'" width="100%"> -->
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import axios from '~plugins/axios'
export default {
  computed: {
    // items () { return this.$store.state.items }
  },
  props: ['items'],
  data () {
    return {
      // items: []
    }
  },
  created () {
    // console.log('created!')
    // axios.get('http://localhost:1111/api/products?sort=name|desc&page=1&per_page=9').then((response) => {
    //   this.items = response.data.data
    // })
    console.log(this.items)
  },
  methods: {
    readPost (id) {
      // this.$router.push({ name: 'posts-id', params: { id: id } })
      console.log(id)
    }
  }

}
</script>

<style scope>
.card {
  box-shadow: none;
  background-color: transparent !important;
}
</style>
