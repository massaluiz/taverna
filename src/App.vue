<template>
  <v-app>
    <div>
    <v-toolbar dark prominent src="https://i.imgur.com/0PiJvwg.jpg">
      <v-btn class="modify" @click="nav('menu')">
        Home
      </v-btn>
      <v-btn class="hidden-xs-only modify" @click="nav('classes')">
        Classes
      </v-btn>
      <v-toolbar-title>Tavern</v-toolbar-title>
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
