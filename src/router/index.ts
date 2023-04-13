import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
let constantRoutes: Array<RouteRecordRaw> = [];

import { localRoutes } from './constrant_routes';
constantRoutes = constantRoutes.concat(localRoutes);
console.log('>>> ', constantRoutes);

import { permissionRoutes } from './permission_routers';
constantRoutes[4].children = permissionRoutes;

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