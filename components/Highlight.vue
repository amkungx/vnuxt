<template>
  <div class="hero pt-2">
    <div class="text-lg-center text-md-center text-sm-center text-xs-center px-5 py-5">
      <h1>คนหาย สัตว์เลี้ยงหาย ของหาย.</h1>
      <h2>คุณสามารถลงประกาศ แจ้งหายไว้ได้ที่นี่ แล้วให้พวกเราช่วยตามหา</h2>
      <v-btn @click.native="goCreate" class="blue-grey white--text">
        <v-icon left dark>edit</v-icon>
        แจ้งหาย
      </v-btn>
    </div>
    <p class="credits">
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    goCreate () {
      this.$router.push({ name: 'posts-Create' })
    }
  }
}
</script>

<style>
.hero h1,
.hero h2,
.hero a {
  font-weight: 200;
  font-size: 200%;
  color: #ffffff;
}

.hero {
  margin: -38px -24px 38px;
  background-position: 50% 50%;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url('/img/charity-header.jpg');
}
</style>
