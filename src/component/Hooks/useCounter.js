import { useState } from "react";

export const useCounter = () => {
  const [state, setState] = useState(0);
  const handlInc = () => {
    console.log("cl");
    setState(state + 1);
  };
  return [state, handlInc];
};
