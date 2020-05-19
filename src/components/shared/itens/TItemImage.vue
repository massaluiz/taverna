<template>
    <v-container>
        <v-item>
            <v-card class="d-flex align-center" 
                    dark height="200" 
                    :class="chooseStyle" 
                    @click="goToWhere()">
                <v-scroll-y-transition>
                    <div class="display-3 flex-grow-1 text-center">
                      <span class="bold">{{ title }}</span>
                    </div>
                </v-scroll-y-transition>
            </v-card>
        </v-item>
    </v-container>
</template>

<script>
export default {

    name: 'tItemImage',
    props: {
      title: {
        type: String,
        required: true
      },
      tstylo: {
        type: String,
        required: true
      }
    },
    computed: {
        chooseStyle() {
            if(this.tstylo == "class") {
                return "background-class-image";
            } else if (this.tstylo == "race") {
               return 'background-race-image';
            } else if (this.tstylo == "step") {
                return 'background-step-image';
            } else {
                return '';
            }
        }
    },
    methods: {
      goToWhere() {
        this.$emit('goToLink');
      }
    }
}
</script>

<style scoped>
  .background-class-image {
    background-image: url('https://cdn.wallpapersafari.com/64/27/HjuL79.jpg'); 
    width: 100%; 
    height: 150px; 
    background-size: 100%;
  }

  .background-race-image {
    background-image: url('https://media.dnd.wizards.com/styles/second_hubpage_banner/public/images/head-banner/03_NEW-TO-DnD_Races_Heroes_Hero_140725.jpg'); 
    width: 100%; 
    height: 150px; 
    background-size: 100%;
  }

  .background-step-image {
    background-image: url('https://media.dnd.wizards.com/styles/second_hubpage_banner/public/images/head-banner/02_Subsection_Hero_TiamatKeyArt_140714_0.jpg'); 
    width: 100%; 
    height: 150px; 
    background-size: 100%;
  }

  .bold {
    font-weight: bold;
  }


  @media screen and (max-width: 992px) {
    .background-class-image {
      background-image: none; 
    }

    .background-step-image {
      background-image: none; 
    }

    .background-race-image {
      background-image: none; 
    }
  }
</style>