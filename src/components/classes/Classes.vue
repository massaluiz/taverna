<template>
  <v-container fluid>
    <t-card-image :classes="classes"></t-card-image>
  </v-container>
</template>

<script>

  import axios from '../../axios';
  import ClassesController  from '../../controller/ClassesController';
  import TCardImage from '../shared/cards/TCardImage';

  export default {
    name: 'Classes',
    components: {
      't-card-image': TCardImage
    },
    data: () => ({
      classes: []
    }),
    created() {

      this.classesController = new ClassesController(axios);
      this.classesController.getList().then((classes) => {
        this.classes = classes;
      })
      
    }
  }
</script>
