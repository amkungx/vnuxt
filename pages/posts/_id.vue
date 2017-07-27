<template>
  <div>
    about ทดสอบ {{item}}{{item2}}
    <button class="btn btn-danger" @click="getData(1)">test</button>
    <button class="btn btn-primary" @click="getData(2)">test</button>
    <div class="fontThai">ดึงข้อมูล sss</div>

  </div>
</template>
<script>
import axios from '~plugins/axios'
export default {
  data () {
    return {
      url: 'http://activate.adobe.com' + this.$route.path + '/',
      item: { name: 'testname' },
      item2: null
    }
  },
  head () {
    return {
      title: this.item.name,
      meta: [
        { property: 'fb:app_id', content: '314810962296870' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.item.name },
        { property: 'og:description', content: this.item.description },
        { property: 'og:url', content: this.url },
        { property: 'og:image', content: 'https://www.w3schools.com/css/img_fjords.jpg' }
      ]
    }
  },
  created () {
    // console.log(global.location)
  },
  asyncData ({ route }) {
    console.log('created!')
    // console.log(route.params.id)
    // var _self = this
    return axios.get('/api/products/' + route.params.id)
      .then((res) => {
        return { item: res.data }
      })
  },
  methods: {
    getData (item) {
      var _self = this
      axios.get('/api/products/' + item)
        .then((res) => {
          _self.item2 = res.data
        })
    }
  }
}
</script>
<style>
</style>
