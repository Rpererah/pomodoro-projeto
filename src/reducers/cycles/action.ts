import { Cycle } from './reducer'

export enum ActionTypes {
  Add_New_Cycle = 'Add_New_Cycle',
  Interrupt_Current_Cycle = 'Interrupt_Current_Cycle',
  Mark_Current_Cycle_As_Finished = 'Mark_Current_Cycle_As_Finished',
}
export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.Add_New_Cycle,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.Interrupt_Current_Cycle,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.Mark_Current_Cycle_As_Finished,
  }
}
