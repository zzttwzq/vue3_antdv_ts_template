const {
    isEmpty
} = require('../util')

module.exports = {
    description: '生成路由',
    prompts: [{
        type: 'bool',
        name: 'name',
        message: '是否重新生成？',
        default: true,
        // validate: isEmpty('文件名')
    }, ],
    actions: function(data) {
        const { name, functions, hasBtn } = data

        let fs = require('fs');
        let actionList = [];
        let dirPath = './src/views/';

        fs.readdir(dirPath, function(error, files) {
            console.log('>>>', files);
        });

        // fs.readFile(dirPath, function(error, data) {
        //     if (error) {
        //         console.log(`读取${filePath} 失败`)
        //         reject(error)
        //     } else {
        //         resolve(data);
        //     }
        // })

        const actions = [
            //     {
            //     type: 'append',
            //     path: `./src/router/local.js`,
            //     pattern: /\[/,
            //     templateFile: './__plop-templates__/menu/menu.hbs',
            //     data: {
            //         name: `{{name}}`,
            //     }
            // }
        ]
        return actionList;
    }
}