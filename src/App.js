import { useCounter } from "./component/Hooks/useCounter";

const App = () => {
  const [state, handlInc] = useCounter();

  // console.log(xyz);
  return (
    <div>
      <button onClick={handlInc}>Add</button>
      <h1>{state}</h1>
    </div>
  );
};

export default App;
