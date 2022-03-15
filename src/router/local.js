export const localRoutes = [{
        path: '/login',
        name: '登录页',
        component: () =>
            import ('@/views/login/LoginPage')
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/views/exception/Exp404Page'),
    },
    {
        path: '/403',
        name: '403',
        component: () =>
            import ('@/views/exception/Exp403Page'),
    },
    {
        path: '/',
        name: '首页',
        // component: TabsView,
        redirect: '/login',
        children: []
    },
];