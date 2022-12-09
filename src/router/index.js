import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/Home.vue';
import about from '../views/About.vue';
import Sites from '../views/Sites.vue';



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
            path: '/Sites',
            name: 'Sites',
            component: Sites
        },
        

    ]
});

export default router