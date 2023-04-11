const fs = require("fs");
// const pinyin = require("pinyin");

// var dirList = fs.readdirSync("./json");
// dirList.map(element => {
//     console.log(element)
// });

dirList = [
    // "design",
    "flow",
    "mind",
    "plan",
];

async function main() {
    var totalList = {};
    // console.log(dirList);

    // 获取外边list的内容
    // var path = './json';
    // var dirList = await readDir(path);
    // var alldir = Object.keys(dirList);
    // for (let index = 0; index < alldir.length; index++) {
    //     let dirName = alldir[index];

    //     var dirPath = path + '/' + dirName;
    //     var fileState = await fs.statSync(dirPath);
    //     var isDir = fileState.isDirectory();

    //     console.log(isDir);
    //     if (isDir == false && dirName.substr(0, 1) != '.') {

    //         var fileName = dirName;
    //         var filePath = dirPath;
    //         console.log(`dirName: ${dirName}`);
    //         console.log(`dirPath: ${dirPath}`);

    //         var map = await readListData(filePath, `${fileName}`, );
    //         totalList[fileName] = map;
    //     }
    // }

    // 获取文件里的内容
    path = './template_data';
    dirList = await readDir(path);
    var alldir = Object.keys(dirList);
    for (let index = 0; index < alldir.length; index++) {
        let dirName = alldir[index];
        let arr = dirList[dirName];

        for (let j = 0; j < arr.length; j++) {
            let fileName = arr[j];
            let filePath = path + '/' + dirName + '/' + arr[j];
            // console.log(fileName);
            // console.log(filePath);
            // console.log('.....');

            var map = await readData(filePath, `${fileName}.json`, );
            totalList[fileName.split('.')[0]] = map;
        }
    }

    // 流式文件写入
    await fs.writeFileSync("./json2/translate.json", JSON.stringify(totalList));
}

async function readDir(tempPath) {
    var dirList = {};

    var d = await fs.readdirSync(tempPath);
    for (let index = 0; index < d.length; index++) {
        const element = d[index];
        if (element.substr(0, 1) != '.') {
            dirList[element] = [];

            var dirPath = tempPath + '/' + element;
            // console.log(`path: ${dirPath}`);
            var fileState = await fs.statSync(dirPath);
            var isDir = fileState.isDirectory();

            // 判断缺失的文件夹
            var dirPath2 = dirPath.split('/');
            dirPath2[1] = 'json2';
            dirPath2 = dirPath2.join('/');
            var exits = await fs.existsSync(dirPath2);
            if (!exits) {
                await fs.mkdirSync(dirPath2);
            }

            // console.log(`isDir: ${isDir}`);
            if (isDir) {
                var li = [];
                var d2 = await fs.readdirSync(dirPath);
                for (let j = 0; j < d2.length; j++) {
                    if (d2[j].substr(0, 1) != '.') {
                        li.push(d2[j]);
                    }
                }

                dirList[element] = li;
            }
        }
    }

    return dirList;
}

async function readListData(filePath, fileName) {
    var dataCN = await fs.readFileSync(filePathCN, "utf8");

    var jsonEN = JSON.parse(dataEN);
    var listEN = jsonEN['data']['records'];
}

async function readData(filePath, fileName) {

    // 获取文件路径
    var filePathEN = filePath.split('/');
    filePathEN[1] = 'template_data_en';
    filePathEN = filePathEN.join('/');

    var filePathCN = filePath.split('/');
    filePathCN[1] = 'template_data';
    filePathCN = filePathCN.join('/');

    console.log(`>>> ${filePathCN}`);

    // 读取文件
    // var dataEN = await fs.readFileSync(filePathEN, "utf8");
    var dataCN = await fs.readFileSync(filePathCN, "utf8");

    // var jsonEN = JSON.parse(dataEN);
    // var listEN = jsonEN['data']['records'];
    var listEN = [];

    var jsonCN = JSON.parse(dataCN);
    var listCN = jsonCN;

    var datalist = {};
    var count = 1;
    fileName = fileName.split('.')[0];
    // fileName = pinyin('liuchengtu');


    var dataMap = {};

    // 遍历内容
    listCN.map(item => {
        // var data = item['data'];
        // if (data['text'] && data['text'] != '') {
        //     console.log(`>>>TEXTCN: ${data['text']}`);

        //     var key = fileName + '_' + count;
        //     console.log(`>>>TEXTCN1: ${key}`);

        //     if (!datalist[key]) {
        //         datalist[key] = {
        //             "zh_CN": data['text'],
        //             "en_US": data['text'],
        //         };
        //         data['text'] = key;
        //     }
        // }

        // count++;

        dataMap[item['id']] = item;
    });

    count = 1;
    listEN.map(item => {
        // var data = item['data'];
        // if (data['text'] && data['text'] != '') {
        //     console.log(`>>>TEXTEN: ${data['text']}`);

        //     var key = fileName + '_' + count;
        //     console.log(`>>>TEXTEN1: ${key}`);

        //     if (datalist[key]) {
        //         datalist[key]["en_US"] = data['text']
        //         data['text'] = key;
        //     }
        // }

        // count++;

        var targetItem = dataMap[item['id']];
        if (item['app'] == "huiyizhuo-pencil") {

            if (item['points'] != null) {

            } else if (item['from'] != null) {
                if (item['from']['point'] != null) {
                    targetItem['from']['point']['x'] = item['from']['point']['x'];
                    targetItem['from']['point']['y'] = item['from']['point']['y'];
                }
            } else if (item['to'] != null) {
                if (item['to']['point'] != null) {
                    targetItem['to']['point']['x'] = item['to']['point']['x'];
                    targetItem['to']['point']['y'] = item['to']['point']['y'];
                }
            }

        } else {
            targetItem['x'] = item['x'];
            targetItem['y'] = item['y'];
            targetItem['width'] = item['width'];
            targetItem['height'] = item['height'];
            targetItem['startX'] = item['startX'];
            targetItem['startY'] = item['startY'];
        }

    });

    // console.log(`>>> ${listEN[0]}`);
    // console.log(`>>> ${listCN[0]}`);

    var filePathCN = filePathCN.split('/');
    filePathCN[1] = 'json2';
    filePathCN = filePathCN.join('/');
    filePathCN = filePathCN.split('.');
    filePathCN[filePathCN.length - 1] = 'json';
    filePathCN = filePathCN.join('.');

    // 写回文件中
    await fs.writeFileSync(filePathCN, JSON.stringify(listCN));

    return datalist;
}

main();