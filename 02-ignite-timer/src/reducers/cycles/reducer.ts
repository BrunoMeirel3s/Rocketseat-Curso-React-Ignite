import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

/**
 * A função cyclesReducer em questão é a function
 * que será chamada na utilização do reducer, ela contém
 * as actions que serão realizadas com os estados e funciona
 * como forma de centralizar isso em um só local
 */

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //  ...state,
      //  cycles: [...state.cycles, action.payload.newCycle],
      //  activeCycleId: action.payload.newCycle.id,
      // }

      /**
       * O produce é utilizado como uma forma mais simples para realizar
       * a manipulação de estados, podemos utilizar a sintaxe padrão
       * do JavaScript para manipular os estados como se fossem simples
       * variáveis e o immer irá realizar as alterações respeitando a imutabilidade
       */
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      /*
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      } */
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //  ...state,
      //  cycles: state.cycles.map((cycle) => {
      //    if (cycle.id === state.activeCycleId) {
      //     return { ...cycle, finishedDate: new Date() }
      //    } else {
      //      return cycle
      //    }
      //  }),
      //  activeCycleId: null,
      // }

      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}
