
//通过saga指令 处理异步逻辑

import { put, call, takeEvery, select } from "redux-saga/effects";
import { setLoading, setStudentsAndTotal, actionTypes } from "../action/student/searchResult";
import { searchStudents } from "../../services/student";

function* fetchStudents(){
  yield put(setLoading(true));
  const condition = yield select(state => state.students.condition);
  // console.log(condition)
  //异步处理数据
  try{
    const resp = yield call(searchStudents, condition);
    // console.log(">>>", resp);
    yield put(setStudentsAndTotal(resp.datas, resp.cont))
  }catch(err){
    console.log(err.message)
  }finally{
    yield put(setLoading(false));
  }

}

export default function* (){
  yield takeEvery(actionTypes.fetchStudents,  fetchStudents);
}