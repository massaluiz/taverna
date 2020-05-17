<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col>
          <t-item-image v-for="menu in menus" :key="menu.id" 
                        :title="menu.title" 
                        :tstylo="menu.tstyle"
                        @goToLink="goToLink(menu.path)" >
          </t-item-image>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import TItemImage from '../shared/itens/TItemImage';
import { menus } from './Menu';

export default {

    name: "Menu",
    components: {
      't-item-image':TItemImage
    },
    data() {
      return  {
        menus: []
      }
    },
    created() {
      this.menus = menus;
    },
    methods: {
      goToLink(where) {
        this.$router.push(where);
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

  .background-step {
    background-image: url('https://media.dnd.wizards.com/styles/second_hubpage_banner/public/images/head-banner/02_Subsection_Hero_TiamatKeyArt_140714_0.jpg'); 
    width: 100%; 
    height: 150px; 
    background-size: 100%;
  }

  .bold {
    font-weight: bold;
  }
</style>