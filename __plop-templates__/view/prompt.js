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
        },
        // {
        //     type: 'confirm',
        //     name: 'hasDir',
        //     message: '是否需要文件夹',
        //     default: true
        // }, 
    ],
    actions: function(data) {
        const { name } = data

        let addFile = {
            type: 'add',
            path: `./src/views/{{name}}/{{name}}Page.vue`,
            pattern: /\[/,
            templateFile: './__plop-templates__/view/view.hbs',
            data: {
                name: `{{name}}`,
            }
        };

        // if (hasDir == false) {
        //     addFile['path'] = `./src/views/{{name}}/{{name}}Page.vue`;
        // }

        const actions = [
            addFile,
            {
                type: 'append',
                path: `./src/router/permission_routers.ts`,
                pattern: /\[/,
                templateFile: './__plop-templates__/router/router.hbs',
                data: {
                    name: `{{name}}`,
                    // hasDir: hasDir,
                }
            }
        ]
        return actions
    }
}