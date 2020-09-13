
/**
 * 1. 学生数据和总数
 * 2. 是否正在加载
 */
export const actionTypes = {
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setIsLoading: Symbol("setIsLoading"),
  fetchStudents: Symbol("fetchStudents")
}

//通过saga指令 call, 监听 副作用
export function fetchStudents() {
  return {
    type: actionTypes.fetchStudents
  }
}

export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total
    }
  }
}

export function setIsLoading(isLoading){
  return {
    type: actionTypes.setIsLoading,
    payload: isLoading
  }
}