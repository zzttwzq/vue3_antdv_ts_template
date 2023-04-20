/**
 * @author chuzhixin 1204505056@qq.com
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
// import { asyncRoutes, constantRoutes } from '@/router'
// import { getRouterList } from '@/api/router'
// import { convertRouter, filterRoutes } from '@/utils/routes'

import { asyncRoutes, constantRoutes, getRouterList, convertRouter, filterRoutes } from '../../utils/router-util'

const state = () => ({
    menus: [{ '1': 1 }],
    routes: [],
})
const getters = {
    menus: (state) => state.menus,
    routes: (state) => state.routes,
}
const mutations = {
    setRoutes(state, routes) {
        state.routes = routes
    },
    setMenus(state, menus) {
        state.menus = menus
    },
}
const actions = {
    /**
     * @author chuzhixin 1204505056@qq.com
     * @description intelligence模式设置路由
     * @param {*} { commit }
     * @returns
     */
    async setRoutes({ commit }, dataRoutes) {
        // const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes])
        // commit('setRoutes', finallyRoutes)
        // return [...asyncRoutes]
        console.log('>>>', dataRoutes);

        state.routes = dataRoutes;
    },
    /**
     * @author chuzhixin 1204505056@qq.com
     * @description all模式设置路由
     * @param {*} { commit }
     * @returns
     */
    async setAllRoutes({ commit }) {
        let { data } = await getRouterList()
        if (data[data.length - 1].path !== '*')
            data.push({ path: '*', redirect: '/404', hidden: true })
        const asyncRoutes = convertRouter(data)
        const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes])
        commit('setRoutes', finallyRoutes)
        return [...asyncRoutes]
    },
    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 画廊布局、综合布局设置路由
     * @param {*} { commit }
     * @param accessedRoutes 画廊布局、综合布局设置路由
     */
    setPartialRoutes({ commit }, accessedRoutes) {
        commit('setPartialRoutes', accessedRoutes)
    },
}

export default { state, getters, mutations, actions }