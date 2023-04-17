import { RouteRecordRaw } from 'vue-router'

export const permissionRoutes: Array<RouteRecordRaw> = [
    {
        path: '/customForm',
        component: () => import('@/views/customForm/customFormPage.vue'),
        name: 'customForm',
        meta: {
            title: 'customForm'
        }
    },
    {
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboardPage.vue'),
        name: 'Dashboard',
        meta: {
            title: 'dashboard',
            icon: '#icondashboard',
            affix: true
        }
    },
    {
        path: 'table',
        component: () => import("@/views/table/tablePage.vue"),
        name: 'Table',
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
        path: '/ttt',
        component: () => import('@/views/test/testPage.vue'),
        name: 'ttt',
        meta: {
            title: 'ttt'
        },
        children: [
            {
                path: '/test1',
                component: () => import('@/views/test/testPage.vue'),
                name: 'test1',
                meta: {
                    title: 'test1'
                },
            },
            {
                path: '/test2',
                component: () => import('@/views/test/testPage.vue'),
                name: 'test2',
                meta: {
                    title: 'test2'
                },
            },
        ]
    },

];