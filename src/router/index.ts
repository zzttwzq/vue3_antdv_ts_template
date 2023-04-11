import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { localRoutes } from './local';

const constantRoutes: Array<RouteRecordRaw> = localRoutes;
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})
// router.beforeEach((to,from,next) =>{
//     next();
// }) 

// router.afterEach((to,from) =>{

// });

export default router