import Menu from './components/menu/Menu.vue';
import Classes from './components/classes/Classes.vue';

export const routes = [
    {path:'', name: 'menu', component: Menu},
    {path:'/classes', component: Classes}
];