import { writeFileSync, readFileSync } from 'fs';

// 读取我们新建的配置文件
const config = JSON.parse(readFileSync('./data/nav.config.json', 'utf8'));

// 直接生成项目需要的 db.json 格式
const data = {
  "分类": config.categories.map(cat => ({
    "身份证": cat.id,
    "名字": cat.name
  })),
  "地点": config.sites.map(site => ({
    "名字": site.name,
    "url": site.url,
    "偶像": site.icon,
    "类别": site.category
  }))
};

// 写入到项目的 data/db.json
writeFileSync('./data/db.json', JSON.stringify(data, null, 2), 'utf8');

console.log("✅ 配置生成成功！");
