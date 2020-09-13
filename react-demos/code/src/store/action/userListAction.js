import { getAllStudents } from '../../services/student'

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users");
export const SETLOADING = Symbol("set-loading");

export const createAddUserAction = (user) => ({
  type: ADDUSER,
  payload: user
});

export const createDeleteUserAction = (id) => ({
  type: DELETEUSER,
  payload: id
});

export const createUpdateUserAction = (id, newUserData) => ({
  type: UPDATEUSER,
  payload: {
    ...newUserData,
    id
  }
});

export const createSetUsersAction = (users) => ({
  type:SETUSERS,
  payload: users //用户数组
});

export const createSetLoadingAction = (isLoading) => ({
  type: SETLOADING,
  payload: isLoading //是否正在加载
});

//因为有了react-thunk, 就可以在action中处理side effect: async get datas
export function fetchUsers() {
  return async function (dispatch) {
    dispatch(createSetLoadingAction(true)); //正在加载
    const users = await getAllStudents();
    // console.log(users)
    const action = createSetUsersAction(users);
    dispatch(action);
    dispatch(createSetUsersAction(false)); //没有正在加载
  }
}
