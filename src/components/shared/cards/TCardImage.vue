<template>
  <v-container fluid>
      <v-row dense>
        <v-col v-for="tclass in classes" :key="tclass.name" cols="4">
          <v-card class="mx-auto">
            <v-img :src="tclass.src" class="white--text align-end t-card-image" >
              <v-card-title class="text--primary" v-text="tclass.name"></v-card-title>
            </v-img>

            <v-card-text class="text--primary">
                <div>{{ tclass.desc.substring(1, 250) }} ...</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>

            <v-card-subtitle>
            Dice Hit: {{ tclass.hitDice }} <br/> Skills: {{ tclass.profSkills }} 
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
        vertical-align: middle;
    }
</style>