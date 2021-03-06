# 用 Redux + thunk 管理学生数据

需求: 根据关键字(key), 性别(sex), 分页信息(当前页码page) 查询学生数据.

1. 分析:
+ 传统的做法: 
  - 初始条件: 渲染数据(页面一加载, 就先展示默认条件下的数据)
  - 条件改变: 比如页面上点击了"查询"按钮, 程序中会监听click事件,来重新获取新的条件, 获取新的数据,渲染在页面上
+ 数据驱动的做法: 
  - 默认条件是什么
  - 默认条件下的得到的学生数据
  - 先不考虑如何改变条件的, 而是先关心: 条件改变后, 系统是否可以监听到数据的改变(logger调试),和 直接带来的数据变化是什么
  - 怎么改变条件数据的, 改变成什么了都不要考虑

+ 区别:
  - 传统做法: 条件改变 -> 结果改变
  - 数据驱动: 条件是数据, 结果是数据, 把他们分开想. 和页面没有关系, 只关心数据流动. 改变后的条件数据作为获取学生数据的参数, 获取到了新的学生数据. 

2.  查询条件:
+ 关键字: 字符串, 可以为空字符串
+ 性别: 
  - 1: 查询女
  - 0: 男
  - -1: 不限
+ 当前页码
+ 页容量

3. 查询结果:
- 学生数组
- 学生总数
- 查询状态: 是否正在查询中
