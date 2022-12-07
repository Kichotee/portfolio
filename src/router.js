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
        path:'/Works',
        name:'works',
        component:works
    },
    {
        path:'/About',
        name:'about',
        component:about
    },
   
]
const router =createRouter({
    routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})
export default router