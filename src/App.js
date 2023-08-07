import CounterReducer from "./component/Reducer/CounterReducer";
import Counter from "./component/State/Counter";
import CounterState from "./component/State/CounterState";

const App = () => {
  return (
    <div>
      {/* <CounterState /> */}
      <CounterReducer />
    </div>
  );
};

export default App;
