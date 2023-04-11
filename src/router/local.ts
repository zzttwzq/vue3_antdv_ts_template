import { RouteRecordRaw } from 'vue-router'

export const localRoutes: Array<RouteRecordRaw> = [
    {
        path: '/table',
        component: () => import("@/views/table/tablePage.vue"),
        name: 'table',
        meta: {
            title: 'table'
        }
    },
    {
        path: '/index',
        component: () => import('@/views/index/indexPage.vue'),
        name: 'index',
        meta: {
            title: 'index'
        }
    }, 
    {
        path: '/login',
        name: '登录页',
        component: () =>
            import('@/views/login/testPage.vue'),
    },
    {
        path: '/403',
        name: '403',
        component: () =>
            import('@/views/exception/Exp403Page.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import('@/views/exception/Exp404Page.vue'),
    },
    {
        path: '/500',
        name: '500',
        component: () =>
            import('@/views/exception/Exp500Page.vue'),
    },
    {
        path: '/',
        name: '首页',
        redirect: '/login',
        children: [],
    },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/404',
    // },
];