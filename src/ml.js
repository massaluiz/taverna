import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
 
Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      home: 'Home',
      classes: 'Classes',
      tavern: 'Tavern',
      dices: 'Dices',
      'dice-name': 'Dice Name',
      'qtd-sides': 'Qtd sides',
      'create':'Create',
      'required-fiels': 'Required fields...'
    }),
 
    new MLanguage('portuguese').create({
      home: 'Inicio',
      classes: 'Classes',
      dices: 'Dados',
      'dice-name': 'Nome do Dado',
      'qtd-sides': 'Qtd Lados',
      'create':'Criar',
      'required-fiels': 'Campos Obrigatórios...'
    })
  ]
})