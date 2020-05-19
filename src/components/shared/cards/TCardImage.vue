<template>
  <v-container fluid>
    <v-card>
      <v-img class="white lighten-2"
             aspect-ratio="1" 
             max-height="550" 
             contain 
             :src="src">
        <v-card-title class="text--primary" 
                      v-text="name">
        </v-card-title>
      </v-img>
      <v-card-text class="text--primary">
          <div>{{ desc.substring(1, 250) }} ...</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-subtitle>
        <p>
          <span class="bold">{{ $ml.get('hit-dice') }}</span> 
          {{ hitDice }} 
        </p>
        <p>
          <span class="bold">{{ $ml.get('saving-throws') }}</span> 
          {{ profSavingThrows }}
        </p> 
      </v-card-subtitle>
      <v-card-actions>
        <v-btn text color="black accent-4"
               @click="goToClass()">
          {{ $ml.get('view-details') }}
      </v-btn>
      </v-card-actions>
    </v-card> 
  </v-container>
</template>

<script>
  export default {
    name: 'tCardImage',
    props: {
      name: {
        type: String,
        required: true
      },
      src: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      hitDice: {
        type: String,
        required: true
      },
      profSavingThrows: {
        type: String,
        required: true
      }
    },
    methods: {
      goToClass() {
        this.$emit('goToClass');
      }
    }
  }
</script>

<style scoped>

    p {
      margin-bottom: 0 !important;
    }
    .t-card-image {
        width: 100%;
        height: auto;
    }

    .bold {
       font-weight: bold;
    }
    
</style>