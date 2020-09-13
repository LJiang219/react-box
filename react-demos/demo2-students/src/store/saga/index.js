//saga: 处理react side effect 而存在

import { all } from "redux-saga/effects";
import studentTask from "./studentTask";
import counterTask from "./counterTask";


export default function* (){
  yield all([studentTask(), counterTask()]); // all([xx()])
  console.log("saga 完成")
}