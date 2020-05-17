<template>
  <v-container fluid>
      <v-row dense>
        <v-col v-for="tclass in classes" :key="tclass.name" cols="12" md="6">
          <v-card>
            <v-img :src="tclass.src" class="white lighten-2" aspect-ratio="1" max-height="550" contain>
              <v-card-title class="text--primary" v-text="tclass.name"></v-card-title>
            </v-img>

            <v-card-text class="text--primary">
                <div>{{ tclass.desc.substring(1, 250) }} ...</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle>
            <span class="bold">Dice Hit:</span> {{ tclass.hitDice }} <br/><span class="bold">Skills:</span> {{ tclass.profSkills }} 
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text color="black accent-4">
                View Details
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
</template>

<script>
  export default {
    name: 'tCardImage',
    props: ['classes']
  }
</script>

<style scoped>
    .t-card-image {
        width: 100%;
        height: auto;
    }

    .bold {
       font-weight: bold;
    }
</style>