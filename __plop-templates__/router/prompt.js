const {
    isEmpty
} = require('../util')

module.exports = {
    description: '创建路由',
    prompts: [{
        type: 'input',
        name: 'name',
        message: '输入视图文件名',
        // validate: isEmpty('文件名')
    }, ],
    actions: function(data) {
        const { name, functions, hasBtn } = data

        const actions = [{
            type: 'append',
            path: `./src/router/permission_routers.js`,
            pattern: /\[/,
            templateFile: './__plop-templates__/router/router.hbs',
            data: {
                name: `{{name}}`,
            }
        }]
        return actions
    }
}