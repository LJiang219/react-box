import { put, takeEvery, delay } from "redux-saga/effects";
import { actionTypes, increase, decrease } from "../action/counter";

function* asyncIncrease(){
  yield delay(2000);
  console.log(2222222)
  yield put(increase())
}
function* asyncDecrease(){
  yield delay(2000);

  yield put(decrease())
}
//处理异步加, 异步减
export default function* (){
  console.log(1)
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听asyncIncrease、asyncDecrease")
}