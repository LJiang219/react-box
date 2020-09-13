
import * as userListAction from '../action/userListAction'


// const initialState = [
//   {id: 1, name: "用户1", age: 11},
//   {id: 2, name: "用户2", age: 12}
// ]

const initialState = {
  isLoading: false, //是否正在加载
  datas: [] //用户数组
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case userListAction.ADDUSER:
      return {
        ...state,
        datas: [...state.datas, payload]
      };
    case userListAction.DELETEUSER:
      return {
        ...state,
        datas: state.datas.filter(item => item.id !== payload)
      }
    case userListAction.UPDATEUSER:
      return {
        ...state,
        datas: state.datas.map(item => item.id === payload.id ? {...item, ...payload} : item)
      }
    case userListAction.SETUSERS:
      return {
        ...state,
        datas: payload
      }
    case userListAction.SETLOADING:
      return {
        ...state,
        isLoading: payload
      }
    default: 
      return state;
  }
}