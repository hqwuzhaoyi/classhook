import { useReducer } from "react";
interface Counter {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}

class CounterA implements Counter {
  count = 0;

  constructor(count: number = 0) {
    this.count = count;
  }

  static of(count: number): CounterA {
    return new CounterA(count);
  }

  increment() {
    return CounterA.of(this.count + 1);
  }

  decrement() {
    return CounterA.of(this.count - 1);
  }
}

const initialState: CounterA = new CounterA();

function reducer(state: CounterA, action: Action) {
  switch (action.type) {
    case "increment":
      return state.increment();
    case "decrement":
      return state.decrement();
    default:
      throw new Error();
  }
}

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
