## react-redux 学生管理 demo2-students
+ 页面组件
+ store
+ react-redux 连接组件和数据

+ 刷题记录

|  时间   | 次数  | 备注  |   |
| :---- | :----: | :---- |:----: |
| 08.20  |   1  | StudentSearch.js| 1|

## react-router 
+ 学生管理系统,根据路由展示不同组件

## react ui组件
+ 三栏布局, 特别是 css [absolute]
+ 图片切换
+ 分页组件 [!!!]
+ 移动的小球
+ 蒙层
+ 表单 [!!!]


## 练习

### 仿淘宝刷新
1. 参考 code项目, components.
2. 遇到的问题
+ 将filterList设为state
+ 点击函数, 传递参数, bind
+ 与vue写法不同, {}, 不是字符串,不是{{}}

2. 事件
```jsx
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

```jsx
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

3. 向事件传递参数
+ 分别通过箭头函数和 Function.prototype.bind 来实现。
+ React 的事件对象 e 会被作为第二个参数传递。
+ 如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

3. 渲染className
+ 对象
```jsx
// ES6 模板字符串
<p className={`title ${this.state.addColor?'color':null}`}>标题</p>

```

+ 数组
```jsx
//join("")
<p className={['title',this.state.addColor?'color':null].join(' ')}>标题</p>

//<p class="title color">标题</p>
```