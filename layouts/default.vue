<template>
  <v-app toolbar footer>
    <v-navigation-drawer class="hidden-sm-and-up" temporary v-model="drawer" :mini-variant.sync="mini" overflow absolute :right="right">
      <v-list>
        <v-list-tile router v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="teal">
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only">
        <v-navbar-items v-for="(item, i) in items" :key="i" :to="item.to">
          <router-link :to="item.to" class="px-3 py-4">
            <v-title v-text="item.title"></v-title>
          </router-link>
        </v-navbar-items>
      </div>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer :fixed="fixed" class="teal white--text">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: true,
      items: [
        { icon: 'apps', title: 'หน้าหลัก', to: '/' },
        { icon: 'apps', title: 'ลงประกาศ', to: '/posts/Create' },
        { icon: 'apps', title: 'ประกาศตามตา', to: '/posts/1' },
        { icon: 'bubble_chart', title: 'ช่วยเหลือ', to: '/inspire' }
      ],
      mini: false,
      right: true,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.my-container {
  max-width: 1140px !important;
  margin: auto;
}

.toolbar__content {
  overflow: hidden;
  max-height: 50px;
  min-height: 50px;
}

a {
  text-decoration: none;
  color: #ffffff;
}

a.router-link-exact-active {
  background-color: teal
}
</style>
