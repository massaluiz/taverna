import Menu from './components/menu/Menu.vue';
import Classes from './components/classes/Classes.vue';
import ClassesDetail from './components/classes/ClassesDetail.vue';
import Create from './components/create/Create.vue';
import Dices from './components/shared/dices/Dices.vue';

export const routes = [
    {path:'', name: 'menu', component: Menu},
    {path:'/classes', name:"classes", component: Classes},
    {path:'/classes/:class', name: 'classDetail', component: ClassesDetail},
    {path:'/create', name: 'create', component: Create},
    {path:'/dices', name: 'dices', component: Dices},
    {path:'*', component: Menu}
];