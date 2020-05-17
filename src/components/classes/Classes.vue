<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="tclass in classes" :key="tclass.name" cols="12" md="4"> 
        <t-card-image @goToClass="goToClass(tclass)" :key="tclass.name"
                      :name="tclass.name"
                      :src="tclass.src"
                      :desc="tclass.desc"
                      :hitDice="tclass.hitDice"
                      :profSavingThrows="tclass.profSavingThrows"></t-card-image>
      </v-col>
    </v-row>
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
    created() {

      this.classesController = new ClassesController(axios);
      this.classesController.getList().then((classes) => {
        this.classes = classes;
      })
      
    },
    data: () => ({
      classes: []
    }),
    methods: {
      goToClass(classes) {
        console.log(classes);
      }
    }
  }
</script>
