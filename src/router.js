import{createRouter, createWebHistory} from  'vue-router';

const routes =[
    {
        path:'/',
        name:'home',
        component:()=>import('./views/Home.vue')
    },
    {
        path:'/works',
        name:'works',
        component:()=>import('./views/Works.vue')
    },
    {
        path:'/about',
        name:'about',
        component:()=>import('./views/About.vue')
    }
]
const router =createRouter({
    routes,
    history:createWebHistory(),
})
export default router