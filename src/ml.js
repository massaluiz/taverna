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
      'required-fiels': 'Required fields...',
      'roll': 'Roll',
      'result-of': 'Result of ',
      'dice-list': 'Dice List',
      'hit-points': 'Hit Points',
      'hit-dice': 'Hit Dice:',
      'hit-points-1lvl': 'Hit Points at 1st Level:',
      'hit-points-highlvl': 'Hit Points at Higher Levels:',
      'proficiences': 'Proficiencies',
      'armor': 'Armor:',
      'weapons': 'Weapons:',
      'saving-throws': 'Saving Throws:',
      'skills': 'Skills:',
      'equipment': 'Equipment',
      'class-ability': 'Class Abilities',
      'view-details': 'View Details',
      'menu': 'Menu'
    }),
 
    new MLanguage('portuguese').create({
      home: 'Inicio',
      classes: 'Classes',
      dices: 'Dados',
      tavern: 'Taverna',
      'dice-name': 'Nome do Dado',
      'qtd-sides': 'Qtd Lados',
      'create':'Criar',
      'required-fiels': 'Campos Obrigatórios...',
      'roll': 'Rolar',
      'Result of = ': 'Resultado do ',
      'dice-list': 'Lista de Dados',
      'hit-points': 'Pontos de Vida',
      'hit-dice': 'Rolagem de Dado:',
      'hit-points-1lvl': 'Pontos de vida no nível 1:',
      'hit-points-highlvl': 'Pontos de vida no nível máximo:',
      'proficiences': 'Proficiências',
      'armor': 'Armadura:',
      'weapons': 'Armas:',
      'saving-throws': 'Atributos básicos:',
      'skills': 'Habilidades:',
      'equipment': 'Equipamentos',
      'class-ability': 'Habilidades da classe',
      'view-details': 'Visualizar Detalhes',
      'menu': 'Menu'
    })
  ]
})