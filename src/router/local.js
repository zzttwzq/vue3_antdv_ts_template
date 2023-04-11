export const localRoutes = [
    {
        path: '/table',
        component: () => import('@/views/table/tablePage'),
        name:'table',
        meta: {
            title: 'table'
        }
    },
    {
        path: '/index',
        component: () => import('@/views/index/indexPage'),
        name:'index',
        meta: {
            title: 'index'
        }
    },{
        path: '/login',
        name: '登录页',
        // component: () =>
        //     import ('@/views/login/LoginPage')
        component: () =>
            import ('@/views/login/testPage')
    },
    {
        path: '/403',
        name: '403',
        component: () =>
            import ('@/views/exception/Exp403Page'),
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/views/exception/Exp404Page'),
    },
    {
        path: '/500',
        name: '500',
        component: () =>
            import ('@/views/exception/Exp500Page'),
    },
    {
        path: '/',
        name: '首页',
        // component: TabsView,
        redirect: '/login',
        children: []
    },
];