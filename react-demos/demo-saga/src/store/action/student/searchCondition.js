
export const actionTypes = {
  change: Symbol("change")
}

export function createChangeAction(newCondition){
  return {
    type: actionTypes.change,
    payload: newCondition
  }
}