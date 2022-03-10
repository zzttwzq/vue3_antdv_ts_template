/**
 * @file 创建vuex模块
 * @author wzq 1076976262@qq.com
 * @description 寻找modules目录下的所有vuex模块并导入，会自动加入namespaced：true 避免重复;
 */
import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach((key) => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
    modules[key]['namespaced'] = true
})
export default createStore({
    modules,
})