<template>
  <v-app>
    <div>
    <v-toolbar dark prominen src="https://i.imgur.com/0PiJvwg.jpg">
      <v-btn icon class="hidden-xs-only" @click="back()">
        Back
      </v-btn>
      <v-toolbar-title>Tavern</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
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
    back() {
       this.$router.push({name: 'menu'});
    }
  }
};
</script>
