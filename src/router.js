import{createRouter, createWebHistory} from  'vue-router';
import home from './views/Home.vue'
import works from './views/Works.vue'
import about from './views/About.vue'



const routes =[
    {
        path:'/',
        name:'home',
        component: home
        

    },
    {
        path:'/works',
        name:'works',
        component:works
    },
    {
        path:'/about',
        name:'about',
        component:about
    },
   
]
const router =createRouter({
    routes,
    history:createWebHistory(),
})
export default router