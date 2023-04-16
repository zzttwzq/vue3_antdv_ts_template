/**
 * @author wzq 1076976262@qq.com
 * @description 用户登陆信息，用户信息等；
 */
import { getUserInfo, login, logout } from '@/api/user'
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken,
} from '@/utils/accessToken'
import constrant from '@/config/constrant'
import { message, notification } from 'ant-design-vue'

const state = () => ({
    accessToken: getAccessToken(),
    username: '',
    avatar: '',
    userInfo: null,
})
const getters = {
    accessToken: (state) => state.accessToken,
    username: (state) => state.username,
    avatar: (state) => state.avatar,
    userInfo: (state) => state.userInfo
}
const mutations = {
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
        setAccessToken(accessToken)
    },
    setUsername(state, username) {
        state.username = username
    },
    setAvatar(state, avatar) {
        state.avatar = avatar
    },
}
const actions = {
    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 登录拦截放行时，设置虚拟角色
     * @param {*} { commit, dispatch }
     */
    setVirtualRoles({ commit, dispatch }) {
        dispatch('acl/setFull', true, { root: true })
        commit('setAvatar', 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif')
        commit('setUsername', 'admin(未开启登录拦截)')
    },

    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 登录
     * @param {*} { commit }
     * @param {*} userInfo
     */
    async login({ commit }, userInfo) {
        const { data } = await login(userInfo)
        const accessToken = data[constrant.TOKEN]
        if (accessToken) {
            commit('setAccessToken', accessToken)
            const hour = new Date().getHours()
            const thisTime =
                hour < 8 ?
                '早上好' :
                hour <= 11 ?
                '上午好' :
                hour <= 13 ?
                '中午好' :
                hour < 18 ?
                '下午好' :
                '晚上好'
            notification.open({
                message: `欢迎登录${process.env.VUE_APP_NAME}`,
                description: `${thisTime}！`,
            })
        } else {
            message.error(`登录接口异常，未正确返回${constrant.TOKEN}...`)
        }
    },

    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 获取用户信息接口 这个接口非常非常重要，如果没有明确底层前逻辑禁止修改此方法，错误的修改可能造成整个框架无法正常使用
     * @param {*} { commit, dispatch, state }
     * @returns
     */
    async getUserInfo({ commit, dispatch, state }) {
        const { data } = await getUserInfo(state.accessToken)
        if (!data) {
            message.error(`验证失败，请重新登录...`)
            return false
        }
        let { username, avatar, roles, ability } = data
        if (username && roles && Array.isArray(roles)) {
            dispatch('acl/setRole', roles, { root: true })
            if (ability && ability.length > 0)
                dispatch('acl/setAbility', ability, { root: true })
            commit('setUsername', username)
            commit('setAvatar', avatar)
        } else {
            message.error('用户信息接口异常')
        }
    },

    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 退出登录
     * @param {*} { dispatch }
     */
    async logout({ dispatch }) {
        await logout(state.accessToken)
        await dispatch('resetAll')
    },

    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 重置accessToken、roles、ability、router等
     * @param {*} { commit, dispatch }
     */
    async resetAll({ dispatch }) {
        await dispatch('setAccessToken', '')
        await dispatch('acl/setFull', false, { root: true })
        await dispatch('acl/setRole', [], { root: true })
        await dispatch('acl/setAbility', [], { root: true })
        removeAccessToken()
    },

    /**
     * @author chuzhixin 1204505056@qq.com
     * @description 设置token
     */
    setAccessToken({ commit }, accessToken) {
        commit('setAccessToken', accessToken)
    },
}
export default { state, getters, mutations, actions }