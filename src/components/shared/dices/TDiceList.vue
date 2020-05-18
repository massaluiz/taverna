<template>
  <v-card class="mx-auto">
    <v-toolbar color="dark" dark>
      <v-toolbar-title>{{ $ml.get('dice-list') }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="dice in dices" :key="dice.name">
        <v-list-item-content>
          <v-list-item-title v-text="dice.name"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-btn color="dark"
                 dark
                 small
                 @click="rollDice(dice)">{{ $ml.get('roll') }}</v-btn>
        </v-list-item-content>
        <v-spacer></v-spacer>
      </v-list-item>
      <v-text-field readonly :value="result"></v-text-field>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'TDiceList',
    created() {
        this.dices = JSON.parse(localStorage.getItem('dices'));
    },
    data () {
      return {
        dices: [],
        result: this.$ml.get('result-of')
      }
    },
    methods: {
        rollDice(dice) {
            this.result = dice.sides + " = " + parseInt(Math.random() * 
                           (parseInt(dice.sides.substring(2)) - 1) + 1);
            return parseInt(Math.random() * (parseInt(dice.sides.substring(2)) - 1) + 1);
        }
    }
  }
</script>