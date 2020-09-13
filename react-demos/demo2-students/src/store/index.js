import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMid = createSagaMiddleware(); //创建一个
const store = createStore(reducer, 
  composeWithDevTools(applyMiddleware(sagaMid, logger)));

//start a sagaTask
sagaMid.run(rootSaga);

//查看store中的数据
console.log(store.getState())

export default store;
