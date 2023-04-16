import { RouteRecordRaw } from 'vue-router'

export const permissionRoutes: Array<RouteRecordRaw> = [
    {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/dashboardPage.vue'),
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
        path: '/test',
        component: () => import('@/views/test/testPage.vue'),
        name: 'test',
        meta: {
            title: 'test'
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