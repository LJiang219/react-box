
import {createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga"

// import rootSaga from "./saga/index_take";
import rootSaga from "./saga/index_all";

const sagaMid = createSagaMiddleware(); //创建一个saga中间件

// /**
//  * saga任务
//  */
// function* sagaTask(){
//   console.log("saga启动了")
// }

const store = createStore(reducer, applyMiddleware(sagaMid, logger));

sagaMid.run(rootSaga); //启动saga任务

export default store;