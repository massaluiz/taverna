<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-content>
      <Menu/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/menu/Menu'

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
