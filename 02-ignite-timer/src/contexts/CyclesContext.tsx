import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";

import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

/**
 * Criação do contexto em si mais a baixo será
 * feita a criação do provider também para disponibilizar
 * este contexto
 */
export const CyclesContext = createContext({} as CyclesContextType);

/**
 * A tipagem ReactNode informa para o typescript que iremos
 * receber um children neste componente, o que significa que
 * este componente será um wrapper de outro
 */
interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  /**
   * reducer é um hook que permite trabalhar com manipulação
   * de estados de uma forma centralizada o que permite
   * criar ações e essas ações realizarem as alterações no estado
   */
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    /**
     * Este terceiro parâmetro não é obrigatório porém podemos iniciar
     * o reducer buscando valores de um local inicial para os estados
     */
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );
  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  useEffect(() => {
    /**
     * Ao iniciar o projeto e ao alterar algum ciclo será salvo
     * em localstorage os estados atuais do cycles, para então depois ser
     * recuperado pelo useReducer
     */
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  /**
   * Neste trecho é criado uma outra function para
   * ela então realizar o set do estado pois a passagem
   * de funções set via contexto precisam de uma tipagem
   * bastante confusa ainda pelo typescript
   */
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    /* setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    ) */

    /**
     * o dispatch é a função que permite a manipulação de estado
     * utilizando o reducer, dentro do dispatch é passado a function
     * criada no reducer para manipulação do estado
     */
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    /**
     * Sempre que a informação do estado depender do estado anterior é necessário
     * usar esse formato de set
     */
    // setCycles((state) => [...state, newCycle])
    dispatch(addNewCycleAction(newCycle));
    // setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0);
    // reset() // Reseta o formulário
  }

  function interruptCurrentCycle() {
    /*
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    ) */
    dispatch(interruptCurrentCycleAction());
    // setActiveCycleId(null)
  }

  return (
    /**
     * Ao montarmos o provider precisamos passar no value os estados e as functions que poderão
     * ser utilizadas ao utilizarmos este context
     */
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
