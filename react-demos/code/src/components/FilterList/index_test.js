
import  "./index.css";
import React, { Component } from 'react'

export default class FilterList extends Component {

  state = {
    filterList:[],
    goodsList: this.props.goodsList
  }

  handleClick = (typeIdx, type, goodsIdx, goods) => {
    //1. 高亮
    //2. 更新filterList, 在filterList[goodsIdx]上更新值, 才能保证

    //更新对象数组中的某个对象的属性值
    const goodsList = this.state.goodsList;
    goodsList[goodsIdx].index = typeIdx;

    const filterList = this.state.filterList;
    filterList[goodsIdx] = type;

    this.setState({
      // filterList: [...this.state.filterList, type], //这是在数组filterList上新增了一个type
      filterList,
      goodsList,
    })
    

    //下面的写法都有错
    
    // this.setState({
    //   filterList: [...this.state.filterList, type],
    //   tmpList: tmpList.map((item, key) => {
    //     key == goodsIdx ? 
    //       {
    //         ...item,
    //         index: typeIdx
    //       } : item
        
    //   })
    // });

    // this.setState({
    //   filterList: [...this.state.filterList, type],
    //   tmpList: tmpList.map((item) => ({...item, index: typeIdx}))
    // });

  
    // console.log(this.state.tmpList)
  }


  componentDidMount(){
    //初始, 给每个goods添加一个新的属性index, 在componentDidMount中对吗??
    this.setState({
      goodsList: this.state.goodsList.map(item => ({...item, index:0}))
    })
  }


  render() {
    const goodsList = this.state.goodsList;    // this.state.tmpList.map(item => ({...item, index:0}));
    // console.log(tmpList) //为什么会打印2次
    return (
      <div>
         <div className="box">
          <div className="box1">
            {goodsList.map((goods, goodsIdx) => ( 
              <div className="goods" key={goods.id}>
                <div className="title">{goods.title}</div>
                <ul className="type-list">
                  {goods.typeList.map((type, typeIdx) => (
                    <li className={['type', typeIdx === goods.index ? 'active':''].join(' ')} key={typeIdx} 
                      onClick={this.handleClick.bind(this, typeIdx, type, goodsIdx, goods)}
                    >{type}</li>
                  ))}
                  
                </ul>
              </div>)
            )}
          
          </div>
          <div className="choose-type">
            <div className="title">已选条件</div>
            <span className="no-goods">暂时没有选择过滤条件</span>
            <ul className="filter-list">
              {this.state.filterList.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
          
        </div>
  
      </div>
    )
  }
}



