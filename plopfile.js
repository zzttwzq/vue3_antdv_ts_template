/**
 * @author https://gitee.com/chu1204505056/vue-admin-better （不想保留author可删除）
 * @description 代码生成机
 */
const curdGenerator = require('./__plop-templates__/curd/prompt')
const formGenerator = require('./__plop-templates__/form/prompt')
const vueGenerator = require('./__plop-templates__/vue/prompt')
const vuexGenerator = require('./__plop-templates__/vuex/prompt')
module.exports = (plop) => {
    plop.setGenerator('curd', curdGenerator)
    plop.setGenerator('form', formGenerator)
    plop.setGenerator('vue', vueGenerator)
    plop.setGenerator('vuex', vuexGenerator)
}