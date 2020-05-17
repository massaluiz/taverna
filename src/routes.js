import Menu from './components/menu/Menu.vue';
import Classes from './components/classes/Classes.vue';
import ClassesDetail from './components/classes/ClassesDetail.vue';

export const routes = [
    {path:'', name: 'menu', component: Menu},
    {path:'/classes', component: Classes},
    {path:'/classes/:class', name: 'classDetail', component: ClassesDetail}
];