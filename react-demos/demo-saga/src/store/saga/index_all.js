import { all} from "redux-saga/effects";
// import counterTask from "./counterTask_delay";
import counterTask from "./counterTask_put";

// import studentTask from "./studentTask_fetchStudents";
// import studentTask from "./studentTask_call";
// import studentTask from "./studentTask_select";
import studentTask from "./studentTask_cps";

export default function* (){
  yield all([counterTask(), studentTask()]);
  console.log("saga 完成");
}


