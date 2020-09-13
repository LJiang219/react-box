import React from 'react'

import  "./tmp.css";

export default class CourseList extends React.Component {

  state = {
    // courseList:courseList,
    checkedList: [],
    totalPrice: 0
  }

  handelNum = (item, type) =>{
    
    if(type === '+'){
      item.cart++;
      this.setState({
        checkedList: [...this.state.checkedList, item]
      })
      
    }else{
      if(item.cart === 1){

        alert("不能再减少了!!");
        // item.checked=
      }else{
        item.cart--;
      }

      this.setState({
        checkedList: [...this.state.checkedList, item]
      })
    }
  }

  // componentDidMount(){
  //   //初始, 给每个goods添加一个新的属性index, 在componentDidMount中对吗??
  //   this.setState({
  //     courseList: this.state.courseList.map(item => ({...item, checkVal:false}))
  //   })
  // }

  render() {
    const {courseList} = this.props;
    // console.log(courseList)
    //1. 为每个item添加一个checked
    //2. 用item.checked来控制
    // courseList.map(item => ({...item, checkVal:false}))

    
    
    return (
      <div className="course-box">
        <div className="title-box">
          <input type="checkbox" className="title-chk" />
          <h3 className="title-txt">web前端</h3>
        </div>

        <ul className="course-list">
          {
            courseList.map((item, idx) => (
              <li className="course-item" key={idx} >
                <input type="checkbox" className="item-chk" 
                  checked={item.checkVal} 
                  onChange={(e) => {
                    //如何修改对象数组中某个对象中属性的值
                    // let tmplist = this.state.courseList;
                    
                    item.checkVal = e.target.checked;
      
                    if(item.checkVal){
                      this.setState({
                        checkedList: [...this.state.checkedList, item]
                      })
                     
                    }else{
                      this.setState({
                        checkedList: this.state.checkedList.filter(i => i!==item)
                      })
                    }

                    // console.log(this.state.checkedList)
                  }} />
              
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
                        onChange={(e) => {
                          item.cart = e.target.value;
                          // const tmp = 
                          this.setState({
                            checkedList: [...this.state.checkedList, item],
                            // totalPrice: 
                          })
                        }} />
                      <button className="btn-add"onClick={this.handelNum.bind(this, item, '+')} >+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        
        </ul>

        <div className="sum-box">
          <div className="sum-l">
            <input type="checkbox" className="sum-chk"  />
            <span>全选</span>
          </div>
          <div className="sum-r">
            <span>合计:</span>
            <span className="sum-price">${this.state.totalPrice}</span>
            <button className="btn-sum">结算(<span className="sum-counter">{this.state.checkedList.length}</span>)</button>
          </div>
        </div>
      </div>
    )
  }
  
}
