
import { takeEvery, delay } from "redux-saga/effects";
import { actionTypes} from "../action/counter";

function* asyncIncrease(){
  yield delay(2000); //延迟 2s, 不能写setTimeout,在 setTimeout中无法使用指令
  console.log("触发了asyncIncrease"); //2s之后, 会输出 这句话
}

function* asyncDecrease(){
  yield delay(2000); 
  console.log("触发了asyncDecrease")
}
export default function* (){
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听 asyncIncrease, asyncDecrease")
}
