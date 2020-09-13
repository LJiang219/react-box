## create a react project

$ npx create-react-app my-app
$ cd my-app
  + 已经安装好的有: react, react-dom
$ npm install XXX --save
  + react-router-dom
  + redux
  + middleware
$ npm run start


## install XXX in the react-project
cnpm install react-redux --save


## 升级了node版本到 12.18.3
1. 参考 : https://umijs.org/zh-CN/docs/getting-started
2. 安装了 tyarn 

tyarn create react-app demo-dva #创建项目, 其中添加了servicework

tyarn add dva
tyarn add antd
tyarn start

## 注意:
1. nvm选择好一个node版本
2. create-react-app 这种脚手架 是全局安装在./.nvm/v12.18.3/...
3. 因为没有安装在某个版本的node下面, 就无法使用命令行

## 对于node-12.18.3来讲
当前可以 使用 tyarn create react-app my-app 安装



