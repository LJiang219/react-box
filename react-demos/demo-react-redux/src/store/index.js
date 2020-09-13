import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMid = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMid, logger));
//start a saga task
sagaMid.run(rootSaga);

export default store;