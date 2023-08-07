import { useState } from "react";
import Counter from "./Counter";

const CounterState = () => {
  const [state, setState] = useState(0);
  const [input, setInput] = useState(0);

  const handleInc = () => {
    setState(state + 1);
  };
  const handleDec = () => {
    setState(state - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setState(state + input);
  };
  const handleChange = (e) => {
    setInput(Number(e.target.value));
  };

  return (
    <div>
      <section className="text-center mt-10">
        <h1 className="text-6xl font-bold">Counter App By useState Hook</h1>
      </section>
      <Counter
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInc={handleInc}
        handleDec={handleDec}
        state={state}
        setState={setState}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};
export default CounterState;
