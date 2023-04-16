const {
    isEmpty
} = require('../util')

module.exports = {
    description: '创建组件',
    prompts: [{
            type: 'input',
            name: 'name',
            message: '输入组件名',
            // validate: isEmpty('文件名')
        },
        {
            type: 'input',
            name: 'path',
            message: '输入路径名，类似这种形式”src/xxx“',
            // validate: isEmpty('文件名')
        },
    ],
    actions: function(data) {
        const { name, path } = data

        const actions = [{
            type: 'add',
            path: `./{{path}}/{{name}}.vue`,
            pattern: /\[/,
            templateFile: './__plop-templates__/component/component.hbs',
            data: {
                name: `{{name}}`,
            }
        }]
        return actions
    }
}