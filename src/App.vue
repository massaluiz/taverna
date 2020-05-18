<template>
  <v-app>
    <div>
      <v-toolbar dark prominent src="https://i.imgur.com/0PiJvwg.jpg">
        <v-btn v-for="menuItem in routes" :key="menuItem" 
               class="modify" 
               @click="nav(menuItem.title)" 
               v-text="$ml.get(menuItem.title)"></v-btn>
        <v-toolbar-title v-text="$ml.get('tavern')"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="lang in $ml.list" :key="lang" 
               class="modify" 
               @click="$ml.change(lang)" 
               v-text="lang"></v-btn>
      </v-toolbar>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import { routes } from './routes';

export default {
  name: 'App',
  data() {
    return {
      routes : routes.filter(route => route.inMenu)
    }
  },
  methods: {
    nav(where) {
       this.$router.push({name: where});
    }
  }
};
</script>

<style>
  .modify {
    background-color: transparent !important;
  }
</style>
