/**
 * @author wzq
 * @description 路由拦截状态管理
 */
import { asyncRoutes, constantRoutes, getRouterList, convertRouter, filterRoutes } from '../../utils/router-util'

const state = () => ({
    current: '',
    history: [],
    menus: [],
    routes: [],
})
const getters = {
    menus: (state) => state.menus,
    routes: (state) => state.routes,
    current: (state) => state.current,
    history: (state) => state.history,
}
const mutations = {
    setRoutes(state, routes) {
        state.routes = routes
    },
    setMenus(state, menus) {
        state.menus = menus
    },
    setCurrent(state, routeKey) {
        state.current = routeKey
        console.log('... routeKey', routeKey);
        // router.push(routeKey);
    },
    setHistoryItem(state, item) {
        let h = state.history;

        let obj = h.find(i => {
            return i.key == item;
        });

        if (!obj) {
            h.push({
                title: item,
                key: item,
                closable: true,
            });
        }

        state.history = h;
    },
}
const actions = {
    /**
     * @author wzq
     * @description intelligence模式设置路由
     * @param {*} { commit }
     * @returns
     */
    async getAsyncRoutes({ commit }) {
        console.log('>>> 获取异步路由');

        state.routes = dataRoutes;
    },
    /**
     * @author wzq
     * @description intelligence模式设置路由
     * @param {*} { commit }
     * @returns
     */
    async getAsyncRoutes({ commit }) {
        console.log('>>> 获取异步路由');

        state.routes = dataRoutes;
    },
}

export default { state, getters, mutations, actions }