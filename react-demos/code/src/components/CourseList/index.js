import React from 'react'

import  "./tmp.css";

export default class CourseList extends React.Component {

  state = {
    courseList:this.props.courseList,
    checkedList: [],
    totalPrice: 0,
    chkAll:false
  }

  getTotalPrice = (filterList) => {
    // console.log(filterList)
    // const {checkedList} = this.state; 
    // console.log(checkedList)
    let sum = 0;
    filterList.map(i => {
      if(i.checkVal){
        sum += i.price * i.cart
      }
    });
    // console.log(sum)
    return sum;
  }

  /**
   * 改变每个课程的个数, 与是否选择是不关联的
   * 所以遍历courseList
   * @param {*} item 
   * @param {*} type 
   */
  handelNum = (item, type) => {
    const { courseList} = this.state; 

    if(type === '+') {
      courseList.map(i => {
        if(i===item){
          item.cart++
        }
      });

    }else if(type === '-'){
      courseList.map(i => {
        if(i===item){
          if(item.cart === 1){
            alert("不能再减少了!!");
            
          }else{
            item.cart--;
          }
        }
      });

    }

    //获取一个filterList
    let tmpList = this.getCheckedList(courseList);
    // console.log(tmpList)
    //遍历checkedList, 将所有checkVal为true的值相加
    let sum = this.getTotalPrice(tmpList);

    this.setState({
      courseList,
      totalPrice:sum
    }) 
   
  }

  /**
   * 选中某一项
   * @param {*} e 
   * @param {*} item 
   */
  handleChange = (e, item) => {
    item.checkVal = e.target.checked;

    const {courseList} = this.state;

    // let tmpList = [];
    // if(item.checkVal){
    //   //在数组中新增一个值
    //   tmpList = [...this.state.checkedList, item];
    //   // tmpList.push(item)
    // }else{
    //   // tmpList = courseList.filter(i => i !== item);
    //   tmpList = this.state.checkedList.filter(i => i !== item);
    // }

    //获取一个filterList
    let tmpList = this.getCheckedList(courseList);

    // console.log(tmpList);

    let sum = this.getTotalPrice(tmpList);
    this.setState({
      checkedList: tmpList,
      chkAll: courseList.every(i => i.checkVal),
      totalPrice:sum
    });
    


  }

  /**
   * 获取选中状态的数组
   */
  getCheckedList = (courseList) => {
    // let tmpList = [];
    return courseList.filter(i => i.checkVal)
  }

  /**
   * 全选/全不选
   * @param {*}} e 
   */
  handleChkAll = (e) => {
    // console.log(1)
    // let lst = this.state.courseList;
    const {courseList} = this.state;

    
    //更新chkAll
    courseList.map(i => i.checkVal=e.target.checked);
    let chkAll = e.target.checked;


    let tmpList = this.getCheckedList(courseList);

    //计算总值
    let sum = this.getTotalPrice(tmpList)
    
    this.setState({
      courseList,
      checkedList:tmpList,
      chkAll,
      totalPrice:sum
    })
  }

  handleInput = (e, item) => {
    const {courseList} = this.state;
    //修改数组中某一项的值, 更新courseList
    // item.cart = e.target.value;

    courseList.map(i => {
      if(i===item){
        item.cart = e.target.value;
      }
    })

    let tmpList = this.getCheckedList(courseList);
    // console.log(tmpList)
    //计算总值
    let sum = this.getTotalPrice(tmpList);

    this.setState({
      courseList,
      totalPrice: sum
    })
  }

  render() {

    return (
      <div className="course-box">
        <div className="title-box">
          <input type="checkbox" className="title-chk" checked={this.state.chkAll} 
            onChange={(e) => {this.handleChkAll(e)} } />
          <h3 className="title-txt">web前端</h3>
        </div>
        <ul className="course-list">
          
          {
            this.state.courseList.map((item, idx) => (
              <li className="course-item" key={idx} >
                <input type="checkbox" className="item-chk" 
                  checked={item.checkVal} 
                  onChange={(e) => this.handleChange(e, item)} />
              
                <div className="poster">
                  <img src={item.poster} alt={item.name} />
                </div>
                <div className="item-detail">
                  <div className="item-title">{item.title}</div>
                  <div className="item-bot">
                    <span className="item-price">${item.price}</span>
                    <div className="item-btns">
                      <button className="btn-minus" onClick={this.handelNum.bind(this, item, '-')}>-</button>
                      <input type="text" className="item-counter" value={item.cart} 
                        onChange={(e) => this.handleInput(e, item)}
                       />
                      <button className="btn-add" onClick={this.handelNum.bind(this, item, '+')} >+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))

           
          }

        </ul>



        <div className="sum-box">
          <div className="sum-l">
            <input type="checkbox" className="sum-chk" checked={this.state.chkAll} 
              onChange={(e) => this.handleChkAll(e)} />
            <span>全选</span>
          </div>
          <div className="sum-r">
            <span>合计:</span>
            <span className="sum-price">$ {this.state.totalPrice} </span>
            <button className="btn-sum">结算(<span className="sum-counter">{this.state.checkedList.length}</span>)</button>
          </div>
        </div>

        <button onClick={(e) => {
          console.log("获取的checkedList:", this.state.checkedList);
          
        }}>checkedList</button>
      </div>
    )
  }
  
}
