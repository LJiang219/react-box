import userListReducer from './userListReducer'
import userLoginReducer from './userLoginReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer
})