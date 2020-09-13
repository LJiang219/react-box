import { takeEvery, put, call } from "redux-saga/effects";
import { actionTypes, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult_saga_call";
import { searchStudents} from "../../services/student";


function* fetchStudents(){
  //put指令, 用于重新触发action ~ dispatch一个action
  yield put(setIsLoading(true)); //正在加载中
  //异步获取数据
  //array(this, 调取的函数, 参数)
  const resp = yield array(null, searchStudents, []);

  yield put(setStudentsAndTotal(resp.datas, resp.cont));
  yield put(setIsLoading(false)); //正在加载结束

}

export default function* (){
  //takeEvery指令, 不断监听actionTypes.fetchStudents, 当这个action到达之后,
  //运行生成器函数 fetchStudents(*)
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents")
}