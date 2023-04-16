import { RouteRecordRaw } from 'vue-router'

export const localRoutes: Array<RouteRecordRaw> = [
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
        name: 'root',
        component: import("@/layout/index.vue"),
        // redirect: '/dashboard',
        children: []
    },
];