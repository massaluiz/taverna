<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="344" v-for='tclass of classes' :key="tclass.name">
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
    </v-card>
  </v-container>
</template>

<script>

  import axios from '../../axios';
  import ClassesController  from '../../controller/ClassesController';

  export default {
    name: 'Classes',
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
