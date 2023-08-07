import CounterContext from "./component/Context/CounterContext";
import CounterReducer from "./component/Reducer/CounterReducer";
import CounterRedux from "./component/Redux/CounterRedux";
import CounterState from "./component/State/CounterState";

const App = () => {
  return (
    <div>
      <CounterState />
      <CounterReducer />
      <CounterContext />
      <CounterRedux />
    </div>
  );
};

export default App;
