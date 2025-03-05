import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'; // Ruta principal
import HomeView from '../views/HomeView.vue'; // Vista de Home

const routes = [
    { path: '/', component: HelloWorld }, // Carga HelloWorld.vue en "/"
    { path: '/home', component: HomeView } // Carga HomeView.vue en "/home"
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
