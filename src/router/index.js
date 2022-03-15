import { createRouter, createWebHashHistory } from 'vue-router'
import { localRoutes } from './local'

const constantRoutes = localRoutes;

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

export default router