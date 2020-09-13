import React from "react";
import StudentSearchBar from "./StudentSearchBar";
import { connect } from "react-redux";
import { change as changeCondition } from "../store/action/student/searchCondition";
import { fetchStudents } from "../store/action/student/searchResult";
import store from "../store";

import StudentTable from "./StudentTable";
import Pager from "./common/Pager";
import Loading from "./common/Loading";

//连接 StudentSearchBar
let mapStateToProps = (state) => ({
  defaultValue: {
    key: state.students.condition.key,
    sex: state.students.condition.sex
  }
})

let mapDispatchToProps = (dispatch) => ({
  onSearch: (newCondition) => {
    newCondition.page = 1; //条件中页码回归到1
    dispatch(changeCondition(newCondition)); //重新设置条件
    dispatch(fetchStudents());
  }
})

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);

//连接 StudentTable
let mapStateToProps2 = (state) => ({
  stus: state.students.result.datas
  
})
const Table = connect(mapStateToProps2)(StudentTable);

//连接 Pager
let mapStateToProps3 = (state) => ({
  current: state.students.condition.page,
  total: state.students.result.total,
  limit: state.students.condition.limit,
  panelNumber:5 
})
let mapDispatchToProps3 = (dispatch) => ({
  onPageChange: (newPage) => {
    //重新设置条件
    dispatch(changeCondition({
      page: newPage
    }));
    //触发获取学生数据
    dispatch(fetchStudents());
  }
})
const PagerTemp = connect(mapStateToProps3, mapDispatchToProps3)(Pager);

//连接 loading
let mapStateToProps4 = (state) => ({
  show: state.students.result.isLoading
})
const LoadingTemp = connect(mapStateToProps4)(Loading)

export default class StudentSearch extends React.Component{
  componentDidMount(){
    store.dispatch(fetchStudents())
  }
  render() {
    return <div>
      <SearchBar />
      <Table />
      <PagerTemp />
      <LoadingTemp />
    </div>
  }
}
