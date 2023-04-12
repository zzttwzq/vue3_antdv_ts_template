//跨域代理前缀
const BASE_URL = process.env.NODE_ENV === 'dev_env' ? '' : process.env.VUE_APP_API_BASE_URL

module.exports = {
    TEST: `${BASE_URL}/test`,

    //// ### 自动生成的代码 #### ////
    //// ### 自动生成的代码 #### ////
}