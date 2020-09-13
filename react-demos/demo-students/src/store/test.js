import store from "./index";
// import { change } from "./action/student/searchCondition";
import { fetchStudents } from "./action/student/searchResult";

//测试: 改变查询条件的值, 是否可以在控制台上打出logger
// store.dispatch(change({
//   key: 'abc',
//   page: 2
// }))

store.dispatch(fetchStudents())
