## 全局安装umi
1. 最原始方式安装:
+ 命令行工具: umi, 通过该命令可以对umi工程进行操作
``` 
 $ yarn global add umi
 mkdir umi-learn  #空项目
 cd umi-learn
 cnpm init -y  #初始化项目, 只是生成了一个pageckage.json
 
在项目中新建一个src文件夹, src中添加pages文件夹(页面, 专有名词pages)
src/pages
+ index.js 首页
+ page1.js
+ page2.js


 ```
2. 启动 
+ umi dev # 使用开发模式启动工程
之后会自动生成.umi文件夹
+ 在src/pages 添加inex.js, page1.js等文件, .umi/core/routes.ts 会自动配置路由
+ 



## 使用 脚手架 安装