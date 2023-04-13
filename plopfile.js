/**
 * @author https://gitee.com/chu1204505056/vue-admin-better （不想保留author可删除）
 * @description 代码生成机
 */
const routerGenerator = require('./__plop-templates__/router/prompt')
const componentGenerator = require('./__plop-templates__/component/prompt')
const viewGenerator = require('./__plop-templates__/view/prompt')

// const vueGenerator = require('./__plop-templates__/vue/prompt')
// const vuexGenerator = require('./__plop-templates__/vuex/prompt')

module.exports = (plop) => {
    plop.setGenerator('view', viewGenerator)
    plop.setGenerator('component', componentGenerator)
    plop.setGenerator('router', routerGenerator)

    // plop.setGenerator('form', formGenerator)
    // plop.setGenerator('vue', vueGenerator)
    // plop.setGenerator('vuex', vuexGenerator)
}