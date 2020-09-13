import React, { Component } from 'react'
import  "./index.css";

/**
 * addTask, deleteTask,
 */
export default class TodoList extends Component {
  state ={
    curTask: {
      title:'',
      id: Math.random()
    },
    doingList: [{
      title: '111',
      id: 1
    },{
      title: '222',
      id: 2
    }],
    finishedList: [{
      title: '333',
      id: 3
    },{
      title: '444',
      id: 4
    }],
  }

  handleChange = (e) => {
    const curTask = this.state.curTask;
    curTask.title = e.target.value;

    this.setState({
      curTask
    });
  };

  addTask = (e) => {
    
    //1. 
    const curTask = this.state.curTask;
    const doingList = this.state.doingList;
    doingList.push(this.state.curTask);

    this.setState({
      curTask: {
        ...curTask,
        title: ''
      },
      doingList
    })

    //2.可以这样更新数组
    // const doingList = this.state.doingList;
    // doingList.push(this.state.curTask);
    // this.setState({
    //   curTask: {
    //     ...this.state.curTask,
    //     title: ''
    //   },
    //   doingList
    // })
    
    //3 
    // this.setState({
    //   curTask: {
    //     ...this.state.curTask,
    //     title: ''
    //   },
    //   doingList: [...this.state.doingList, this.state.curTask]
    // });


  }

  handleCheck = (idx, type) => {
    const doingList = this.state.doingList;
    const finishedList = this.state.finishedList;
    if(type === 'doing'){
      //doingList 删除idx上的值
      //finishedList 添加这个值在数组

      const finishedTask = doingList.splice(idx, 1);
      this.setState({
        doingList,
        finishedList: [...finishedList, finishedTask[0]]
      })
    }else if(type === 'finished') {
      const doingTask = finishedList.splice(idx, 1);
      this.setState({
        doingList: [...doingList, doingTask[0]],
        finishedList
      })
    }
  }

  handleDelete = (idx, type) => {
    const todoList = type === 'doing' ? this.state.doingList : this.state.finishedList;
    todoList.splice(idx, 1);

    if(type === 'doing'){
      this.setState({
        doingList:[...todoList]
      })
    }else{
      this.setState({
        finishedList:[...todoList]
      })
    }
   
  }
  
  render() {
    const doingList = this.state.doingList;
    const finishedList = this.state.finishedList;
    const curTask = this.state.curTask;

  
    return (
      <div className="todo-wrap">
        <div className="todo-header">
        <div className="left">toDoList</div>
        <div className="right">
          <input type="text" value={curTask.title} onChange={this.handleChange.bind(this)} />
          <button className="btn-add" onClick={this.addTask.bind(this)}>添加</button>
        </div>
      </div>
      <div className="todo-container">

        <div className="todo-box">
          <div className="title">
            <div className="title-txt">正在进行</div>
            <div className="counter"></div>
          </div>
        
          <ul className="list do-list">
            { doingList.map((item, idx) => (
              <li key={idx}>
                <input type="checkbox" name="checkbox" className="chk" checked={false}
                onChange={this.handleCheck.bind(this, idx, 'doing')} />
                <span className="detail">{item.title}</span>
                <button className="btn-delete" onClick={this.handleDelete.bind(this, idx, 'doing')}>删除</button>  
              </li>))}
            
          </ul>
        </div>

        <div className="todo-box">
          <div className="title">
            <div className="title-txt">已经完成</div>
            <div className="counter"></div>
          </div>
        
          <ul className="list finished-list">
            { finishedList.map((item, idx) => (
               <li key={idx}>
                <input type="checkbox" name="checkbox" className="chk" checked={false}
                  onChange={this.handleCheck.bind(this, idx, 'finished')} />
                <span className="detail">{item.title}</span>
                <button className="btn-delete" onClick={this.handleDelete.bind(this, idx, 'finished')}>删除</button>
             </li>))}
           
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

