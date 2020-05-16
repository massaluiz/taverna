<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col>
            <v-item>
                <v-card color="primary" class="d-flex align-center background-class-image" dark height="200">
                    <v-scroll-y-transition>
                        <div class="display-3 flex-grow-1 text-center" @click="$router.push('/classes')"><span class="bold">Classes</span></div>
                    </v-scroll-y-transition>
                </v-card>
            </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>
  .background-class-image {
    background-image: url('https://cdn.wallpapersafari.com/64/27/HjuL79.jpg'); 
    width: 100%; 
    height: 150px; 
    background-size: 100%;
  }

  .bold {
    font-weight: bold;
  }
</style>