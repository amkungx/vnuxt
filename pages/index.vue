<template>
  <div style="margin-bottom: 50px;">
    <Highlight></Highlight>
    <NewPosts :items="items"></NewPosts>
  </div>
</template>
<script>
import axios from '~plugins/axios'
import Highlight from '~/components/Highlight'
import NewPosts from '~/components/NewPosts'
export default {
  computed: {
    items () { return this.$store.state.items }
  },
  data () {
    return {
      // items: []
    }
  },
  watch: {
    // call again the method if the route changes
  },
  components: {
    Highlight,
    NewPosts
  },
  // asyncData ({ route }) {
  //   console.log('created!')
  //   // console.log(route.params.id)
  //   // var _self = this
  //   return axios.get('/api/products?sort=name|desc&page=1&per_page=9')
  //     .then((res) => {
  //       return { items: res.data.data }
  //     })
  // }
  fetch ({ store }) {
    console.log('fetch!')
    let promises = [
      new Promise((resolve) => {
        axios.get('/api/products?sort=name|desc&page=1&per_page=9')
          .then((resp) => {
            resolve(resp.data.data)
          })
      })
    ]
    return Promise.all(promises).then((resp) => {
      // console.log(resp[0])
      store.commit('setItems', resp[0])
      // this.items = resp[0]
    })
  }
}
</script>
