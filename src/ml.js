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
      tavern: 'Tavern'
    }),
 
    new MLanguage('portuguese').create({
      home: 'Inicio',
      classes: 'Classes',
      tavern: 'Taverna'
    })
  ]
})