import Counter from "./Counter";

import { Provider, useReducer } from "react";
import MyContext from "./MyContext";

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
  } else if (action.type === "SUBMIT") {
    return {
      ...state,
      count: state.count + state.value,
    };
  } else if (action.type === "SUBMITBTN") {
    return {
      ...state,
      count: state.count + state.value,
    };
  }
  return;
};

const CounterContext = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });

  return (
    <>
      <section className="text-center mt-10">
        <h1 className="text-6xl font-bold">Counter App By useContext Hook</h1>
      </section>
      <MyContext.Provider value={{ state, dispatch }}>
        <Counter />
      </MyContext.Provider>
    </>
  );
};
export default CounterContext;
