const {
    isEmpty
} = require('../util')

module.exports = {
    description: '创建视图文件',
    prompts: [{
        type: 'input',
        name: 'name',
        message: '输入视图文件名',
        // validate: isEmpty('文件名')
    }, ],
    actions: function(data) {
        const { name, } = data

        const actions = [{
                type: 'add',
                path: `./src/views/{{name}}/{{name}}Page.vue`,
                pattern: /\[/,
                templateFile: './__plop-templates__/component/component.hbs',
                data: {
                    name: `{{name}}`,
                }
            },
            {
                type: 'append',
                path: `./src/router/local.js`,
                pattern: /\[/,
                templateFile: './__plop-templates__/router/router.hbs',
                data: {
                    name: `{{name}}`,
                }
            }
        ]
        return actions
    }
}