
import  "./index.css";
import React, { Component } from 'react'

export default class FilterList extends Component {

  state = {
    isShow: true,
    filterList:[],
    // filterObj:{},
    goodsList: this.props.goodsList
  }

  handleClick = (typeIdx, type, goodsIdx, goods) => {
    // console.log(typeIdx, type, goodsIdx, goods)
   
    // let isShow = this.state.isShow;
    // isShow = !isShow;

    //1. 高亮
    //2. 更新filterList, 在filterList[goodsIdx]上更新值, 才能保证

    //高亮
    const goodsList = this.state.goodsList;
    goodsList[goodsIdx].index = typeIdx;

    //更新对象数组中的某个对象的属性值
    let filterList = this.state.filterList;
    if(type == '全部'){
      filterList = [];
    }else{
      filterList[goodsIdx] = type;
    }
    

    this.setState({
      isShow:false,
      filterList,
      goodsList,
    })

  }

  handleDelete = (itemIdx) => {
    //去除高亮
    let goodsList = this.state.goodsList;
    goodsList[itemIdx].index = 0;

    //删除点击项目
    let filterList = this.state.filterList;
    // filterList.filter((item, key) => key !== itemIdx);
    filterList.splice(itemIdx, 1)

    // console.log(filterList)
    //判断filterList是否为空
    // console.log(filterList);
 
    this.setState({
      isShow:filterList.length == 0,
      filterList,
      goodsList,
    })
  }

  componentDidMount(){
    //初始, 给每个goods添加一个新的属性index, 在componentDidMount中对吗??
    this.setState({
      goodsList: this.state.goodsList.map(item => ({...item, index:0}))
    })
  }


  render() {
    // const goodsList = this.state.goodsList;  
    // const filterList = this.state.filterList;
    // const isShow = this.state.isShow;
    const {goodsList, filterList, isShow} = {...this.state};

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
            {
              isShow ? (<span className="no-goods">暂时没有选择过滤条件</span>): (
                <ul className="filter-list">
                {filterList.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}<span className="btn-delete" 
                  onClick={this.handleDelete.bind(this, itemIdx)}>X</span></li>
                ))}
              </ul>
              )
            }
            
           
          </div>
          
        </div>
  
      </div>
    )
  }
}



