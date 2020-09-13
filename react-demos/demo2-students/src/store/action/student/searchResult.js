export const actionTypes = {
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setLoading: Symbol("setLoading"),
  fetchStudents: Symbol("fetchStudents")
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

export function setLoading(isLoading) {
  return {
    type: actionTypes.setLoading,
    payload: isLoading
  }
}

export function fetchStudents() {
  return {
    type: actionTypes.fetchStudents
  }
}