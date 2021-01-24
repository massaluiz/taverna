<template>
  <v-container>
    <h1>Criação de Ficha</h1>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="races"
          label="Raça"
          item-text="name"
          item-value="name"
          v-model="sheet.race">
        </v-select>
      </v-col>
      <v-col class="d-flex">
        <v-select
          :items="classes"
          item-text="name"
          item-value="name"
          label="Classe"
          v-model="sheet.class">
        </v-select>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

  import axios from '../../axios';
  import ClassesController  from '../../controller/ClassesController';
  import RacesController  from '../../controller/RacesController';

  export default {
    name: 'CreateSheet',
    created() {

      this.classesController = new ClassesController(axios);
      this.racesController = new RacesController(axios);

      this.classesController.getList().then((classes) => {
        this.classes = classes;
      });

      this.racesController.getList().then((races) => {
        this.races = races;
      });
      
    },
    data: () => ({
      races: [],
      classes: [],
      sheet: {
        race: "",
        class: ""
      }
    }),
  }
</script>

<style scoped>
   
</style>