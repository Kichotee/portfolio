import { createRouter, createWebHistory } from 'vue-router';
import home from './views/Home.vue';
import works from './views/Works.vue';
import about from './views/About.vue';


const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home


        },
        {
            path: '/About',
            name: 'about',
            component: about
        },
        {
            path: '/Works',
            name: 'works',
            component: works
        },
        

    ]
});

export default router