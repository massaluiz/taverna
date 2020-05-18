<template>
  <v-app>
    <div>
      <v-toolbar dark prominent src="https://i.imgur.com/0PiJvwg.jpg">
        <v-btn class="modify" @click="nav('menu')" v-text="$ml.get('home')"></v-btn>
        <v-btn class="hidden-xs-only modify" @click="nav('classes')" v-text="$ml.get('classes')"></v-btn>
        <v-btn class="hidden-xs-only modify" @click="nav('dices')" v-text="$ml.get('dices')"></v-btn>
        <v-toolbar-title v-text="$ml.get('tavern')"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="modify" v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang"></v-btn>
      </v-toolbar>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    nav(where) {
       this.$router.push({name: where});
    }
  }
};
</script>

<style scoped>
  .modify {
    background-color: transparent !important;
  }
</style>
