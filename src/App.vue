<template>
  <v-app>
    <div>
      <v-toolbar dark prominent src="https://i.imgur.com/0PiJvwg.jpg">
        <responsive-menu class="responsive-menu" 
                        :routes="routes">
        </responsive-menu>
        <v-toolbar-title class="title" 
                         v-text="$ml.get('tavern')">
        </v-toolbar-title>
        <default-menu class="default-menu"
                      :routes="routes">
        </default-menu>
      </v-toolbar>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import { routes } from './routes';
import MenuResponsive from './components/menu/MenuResponsive';
import MenuDefault from './components/menu/MenuDefault'

export default {
  name: 'App',
  components: {
    'responsive-menu': MenuResponsive,
    'default-menu': MenuDefault
  },
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

  .responsive-menu {
    visibility: hidden;
  }

  @media screen and (max-width: 992px) {
    .default-menu {
      visibility: hidden;
    }

    .responsive-menu {
      visibility: visible;
    }

    .title {
      visibility: hidden;
    }
  }
</style>
