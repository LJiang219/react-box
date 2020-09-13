
// import { actionTypes } from "../../action/student/searchResult"
import { actionTypes } from "../../action/student/searchResult_saga_call";

const initialState = {
  datas: [],
  total: 0,
  isLoading: false
}

export default function(state = initialState, {type, payload}) {
  switch (type){
    case actionTypes.setIsLoading:
      return {
        ...state,
        isLoading: payload
      }
    case actionTypes.setStudentsAndTotal:
      return {
        ...state, 
        ...payload
      }
    default:
      return state
  }
}