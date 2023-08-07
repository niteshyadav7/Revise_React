import { useEffect, useState } from "react";

export const useFetch = (data) => {
  const [state, setState] = useState("");

  useEffect(() => {
    fetchData(data);
  }, []);

  const fetchData = async (data) => {
    const data1 = await fetch(`${data}`);
    const json = await data1.json();
    setState(json);
  };
  return state;
};
