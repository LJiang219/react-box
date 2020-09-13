
import {SETLOGINUSERTYPE} from '../action/userLoginAction'

const initialState = null;

export default (state=initialState, {type, payload}) => {
  switch (type) {
    case SETLOGINUSERTYPE:
      return payload;
    default:
      return state;
  }
}