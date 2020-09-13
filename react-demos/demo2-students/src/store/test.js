import store from './index';
import { fetchStudents } from './action/student/searchResult'
import { asyncDecrease, asyncIncrease } from "./action/counter";

window.fetchStudents = function () {
  store.dispatch(fetchStudents());
}

window.asyncIncrease = function() {
  store.dispatch(asyncIncrease())
}

window.asyncDecrease = function() {
  store.dispatch(asyncDecrease())
}