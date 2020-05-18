import Menu from './components/menu/Menu.vue';
import Classes from './components/classes/Classes.vue';
import ClassesDetail from './components/classes/ClassesDetail.vue';
import Create from './components/create/Create.vue';
import Dices from './components/dices/Dices.vue';

export const routes = [
    {path:'', name: 'home', component: Menu, title: 'home', inMenu: true},
    {path:'/classes', name:"classes", component: Classes, title: 'classes', inMenu: true},
    {path:'/classes/:class', name: 'classDetail', component: ClassesDetail, title: 'classDetail', inMenu: false},
    {path:'/create', name: 'create', component: Create, title: 'Step-by-Step Characters', inMenu: false},
    {path:'/dices', name: 'dices', component: Dices, title: 'dices', inMenu: true},
    {path:'*', component: Menu}
];