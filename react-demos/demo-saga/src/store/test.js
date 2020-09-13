
import store from "./index";
import { increase, decrease, asyncIncrease, asyncDecrease} from "./action/counter";
import { fetchStudents } from "./action/student/searchResult_saga_call";

// import { searchStudents} from "../services/student";

// console.log(searchStudents())

window.fetchStudents = function(){
  store.dispatch(fetchStudents());
}
window.increase = function(){
  store.dispatch(increase());
}

window.decrease = function(){
  store.dispatch(decrease());
}

window.asyncIncrease = function(){
  store.dispatch(asyncIncrease());
}

window.asyncDecrease = function(){
  store.dispatch(asyncDecrease());
}

