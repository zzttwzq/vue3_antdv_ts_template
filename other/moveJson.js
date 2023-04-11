const fs = require("fs");


async function main() {

    var filePath = '/Users/mac/Desktop/nginx_html/blog/php/test.json';
    var dataCN = await fs.readFileSync(filePath, "utf8");
    var jsonCN = JSON.parse(dataCN);
    var listCN = jsonCN;

    listCN.map(item => {
        item['data']['y'] = item['data']['y'] - 80;
    });

    await fs.writeFileSync('/Users/mac/Desktop/nginx_html/blog/php/test2.json', JSON.stringify(listCN));
}

main();