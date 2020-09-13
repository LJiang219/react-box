import { takeEvery, put, call, select } from "redux-saga/effects";
import { actionTypes, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult_saga_call";
import { searchStudents} from "../../services/student";


function* fetchStudents(){
  //put指令, 用于重新触发action ~ dispatch一个action
  yield put(setIsLoading(true)); //正在加载中

  //用select指令获取仓库中所有数据
  //1. 基本
  // const state = yield select();
  // console.log(state);
  // const resp = yield call(searchStudents);
  //2. 传递函数, 筛选仓库中的数据
  const condition = yield select(state => state.students.condition);
  //异步获取数据, 按条件查询
  const resp = yield call(searchStudents, condition);

  yield put(setStudentsAndTotal(resp.datas, resp.cont));
  yield put(setIsLoading(false)); //正在加载结束

}

export default function* (){
  //takeEvery指令, 不断监听actionTypes.fetchStudents, 当这个action到达之后,
  //运行生成器函数 fetchStudents(*)
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents")
}