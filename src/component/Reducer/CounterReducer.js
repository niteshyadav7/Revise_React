import { useReducer } from "react";
import Counter from "./Counter";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === "ADDVALUE") {
    return {
      ...state,
      value: action.payload,
    };
  } else if (action.type === "HANDLESUBMIT") {
    return {
      ...state,
      count: state.count + state.value,
    };
  }
  return;
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });
  console.log(typeof state.value);
  return (
    <div>
      <section className="text-center mt-10">
        <h1 className="text-6xl font-bold">Counter App By useReducer Hook</h1>
      </section>
      <Counter state={state} dispatch={dispatch} />
    </div>
  );
};

export default CounterReducer;
