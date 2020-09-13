import store from './index'
import { fetchUsers } from "./action/userListAction";
// import { createSetUsersAction } from "./action/userListAction";
// import { getAllStudents } from '../services/student';

// //test
// getAllStudents().then(resp => {
//   console.log(">>>", resp) ; //[]
//   const action = createSetUsersAction(resp);
//   store.dispatch(action)
// })

store.dispatch(fetchUsers())