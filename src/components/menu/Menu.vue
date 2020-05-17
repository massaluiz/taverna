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