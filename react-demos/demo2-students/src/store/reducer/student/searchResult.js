import { actionTypes}  from "../../action/student/searchResult";

const initialState = {
  datas: [],
  total: 0,
  isLoading:false
}

export default function(state = initialState, {type, payload}) {
  switch (type){
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        ...payload
      }
    case actionTypes.setLoading:
      return {
        ...state,
        isLoading: payload
      }
    default: 
      return state;
  }
}