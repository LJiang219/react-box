# Redux-middleware
+ Using middlewre to enable Async Logic

## 学习Redux-middleware
+ 生成一个react-preject
  + npx create-react-app my-app
  + npm install
+ 安装 redux
  ```
  npm i --save redux
  ```
+ 安装 中间件(需要什么, 就安装)
  + npm i --save redux-logger
+ 使用中间件: 处理React 副作用 (side effect);
+ side effect:  指一个function做了和本身运算返回值无关的事情. 比如 修改了全局变量, 修改了出入的参数.
  - ajax操作
  - 修改dom
  
## redux-logger
1. 日志记录
2. 主要用来调试程序
3. install: npm i --save redux-logger

## redux-thunk
1. 允许action是一个带有副作用的函数
2. 原理: 发现action是一个函数, 阻止向后传递
3. 参数: dispatch, getState, extra