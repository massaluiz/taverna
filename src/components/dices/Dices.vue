<template>
    <v-container class="grey lighten-5">
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-text-field :label="$ml.get('dice-name')"
                        :rules="rules"
                        v-model="dice.name"
                        @change="onChangeRequired"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
         <v-select :label="$ml.get('qtd-sides')"
                   :items="items"
                   :rules="rules"
                   :menu-props="{ top: true, offsetY: true }"
                   v-model="dice.sides"
                   @change="onChangeRequired"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
         <div class="my-2">
            <v-btn color="dark"
                   dark
                   @click="create">{{ $ml.get('create') }}</v-btn>
          </div>
      </v-col>
    </v-row>
    <v-alert v-show="required" type="error">
        {{ $ml.get('required-fiels') }}
    </v-alert>
    <t-dice-list></t-dice-list>
  </v-container>
</template>

<script>

import TDiceList from '../shared/dices/TDiceList';

export default {
    name: "Dices",
    components: {
        't-dice-list': TDiceList
    },
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      items: ['1D4', '1D6', '1D8', '1D12', '1D20', '1D100'], 
      dice:{
          name: '',
          sides:''
      },
      required: true
    }),
    methods: {
        create() {

            if(this.required) {

                let dices = JSON.parse(localStorage.getItem('dices'));
                if(dices==null){
                    dices = new Array();
                }
                let insertedDice = this.dice;
                dices.push(this.dice);
                localStorage.setItem('dices', JSON.stringify(dices));
                this.dice = {name: '',sides:''};
                return {inserted: this.required, dice: insertedDice};

            } else {

                return {inserted: this.required, dice: this.dice};
                
            }

        },
        onChangeRequired() {
            if(this.dice.name != '' && this.dice.sides != '') {
                this.required = true;  
            } else {
                this.required = false;
            }
            return this.required;
        }
    }
}
</script>