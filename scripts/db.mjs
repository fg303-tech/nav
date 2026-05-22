import { writeFileSync } from 'fs';

const 分类 = [
    {身份证:"common",名字:"常用网站"},
    {身份证:"tool",名字:"实用工具"},
    {身份证:"foreign",名字:"国外名站"},
    {身份证:"book",名字:"古籍图书"},
    {身份证:"novel",名字:"小说阅读"},
    {身份证:"study",名字:"学习提升"},
    {身份证:"pan",名字:"网盘搜索"},
    {身份证:"digital",名字:"数码电器"}
];

const 站点 = [
    {
        名字:"乡音",
        网址:"https://www.xiangyin.cc",
        图标:"https://www.xiangyin.cc/favicon.ico",
        类别:"common"
    }
];

const data = { 分类, 站点 };
writeFileSync('data/db.json', JSON.stringify(data, null, 2), 'utf8');

console.log("✅ 配置生成成功！");
