import { takeEvery, put } from "redux-saga/effects";
import { actionTypes, setIsLoading } from "../action/student/searchResult_saga_call";

//举例(异步)说明, 测试 如果 promise被拒绝会怎样
function mockStudents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve("学生数据")
      }else{
        reject("错误!!!!")
      }
    }, 2000);
  })
}

function* fetchStudents(){
  //put指令, 用于重新触发action ~ dispatch一个action
  yield put(setIsLoading(true)); //正在加载中
  //异步获取数据
  try{
    // const resp = yield searchStudents(); //yield 返回一个promise对象
    //当saga发现得到的结果是一个Promise对象，它会自动等待该Promise完成
    //完成之后，会把完成的结果作为值传递到下一次next
    //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
    const resp = yield mockStudents();
    console.log(resp)
  }catch(err) {
    //err表示reject的内容
    console.log(err)
  }

  yield put(setIsLoading(false)); //正在加载结束

}

export default function* (){
  //takeEvery指令, 不断监听actionTypes.fetchStudents, 当这个action到达之后,
  //运行生成器函数 fetchStudents(*)
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log("正在监听 fetchStudents")
}