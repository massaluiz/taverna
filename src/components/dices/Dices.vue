<template>
    <v-container class="grey lighten-5">
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-text-field label="Nome do Dado" 
                        :rules="rules"
                        v-model="dice.name"
                        @change="onChangeRequired"></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
         <v-select label="Qtd Lados"
                   :items="items"
                   :rules="rules"
                   :menu-props="{ top: true, offsetY: true }"
                   v-model="dice.sides"
                   @change="onChangeRequired"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
         <div class="my-2">
            <v-btn color="primary"
                   dark
                   @click="create">Criar</v-btn>
          </div>
      </v-col>
    </v-row>
    <v-alert v-show="required" type="error">
        Required fields...
    </v-alert>
  </v-container>
</template>

<script>
export default {
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
      required: false
    }),
    methods: {
        create() {
            if(this.dice.name != '' && this.dice.sides != '') {
                let dices = JSON.parse(localStorage.getItem('dices'));
                if(dices==null){
                    dices = new Array();
                }
                dices.push(this.dice);
                localStorage.setItem('dices', JSON.stringify(dices));
                this.dice = { name: '',sides:''};
            }
        },
        onChangeRequired() {
            if(this.dice.name != '' && this.dice.sides != '') {
                this.required = false;  
            } else {
                this.required = true;
            }
        }
    }
}
</script>