<template>
  <v-container fluid>
    <t-card-image :classes="classes"></t-card-image>
    <!--<v-card class="mx-auto" max-width="344" v-for='tclass of classes' :key="tclass.name">
      <v-card-text>
        <div>Class</div>
        <p class="display-1 text--primary">
          {{ tclass.name }}
        </p>
        <p>Description</p>
        <div class="text--primary">
          {{ tclass.desc }}
        </div>
      </v-card-text>
    </v-card>-->
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
