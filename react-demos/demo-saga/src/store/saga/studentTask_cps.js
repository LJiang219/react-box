import { takeEvery, put, call, select, cps } from "redux-saga/effects";
import { actionTypes, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult_saga_call";
import { searchStudents} from "../../services/student";

//cps指令用于 调用传统回调方式的异步函数
function mockStudents(condition, callback){
  console.log("mockStudents", condition);
  setTimeout(() => {
    if(Math.random() > 0.5) {
      //nodejs风格
      callback(null, {
        cont: 20,
        datas: [
          {id: 1, name: "abc"},
          { id: 2, name: "bcd" }
        ]
      })
    }else{
      callback(new Error("出错了!!!"))
    }
  }, 1000)
}

function* fetchStudents(){
  //put指令, 用于重新触发action ~ dispatch一个action
  yield put(setIsLoading(true)); //正在加载中
  //用select指令获取仓库中所有数据
  const condition = yield select(state => state.students.condition);

  try{
    //异步获取数据, 按条件查询
    // const resp = yield call(mockStudents, condition); //undefined
    const resp = yield cps(mockStudents, condition);
    yield put(setStudentsAndTotal(resp.datas, resp.cont));
  
  }catch(err){
    console.log(err.message)
  }finally{
    yield put(setIsLoading(false)); //正在加载结束
  }
 

}

export default function* (){
  //takeEvery指令, 不断监听actionTypes.fetchStudents, 当这个action到达之后,
  //运行生成器函数 fetchStudents(*)
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents")
}