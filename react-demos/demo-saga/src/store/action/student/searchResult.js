
/**
 * 1. 学生数据和总数
 * 2. 是否正在加载
 */
export const actionTypes = {
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setIsLoading: Symbol("setIsLoading")
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