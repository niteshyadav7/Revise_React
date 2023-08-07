import { useDispatch, useSelector } from "react-redux";
import { addValue, decrease, increase } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter.count);
  //   console.log(selector);

  const [text, setText] = useState(0);
  console.log(text);

  return (
    <>
      <main className="mt-20">
        <section className="flex justify-center">
          <button
            onClick={() => dispatch(increase())}
            type="button"
            className="w-28 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <span className="text-5xl font-bold text-center">+</span>
          </button>
          <h1 className=" p-5 text-red-600 text-9xl">{selector}</h1>
          <button
            onClick={() => dispatch(decrease())}
            type="button"
            className="w-28 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <span className="text-5xl font-bold text-center">-</span>
          </button>
        </section>
        <section className="flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addValue(Number(text)));
            }}
          >
            <input
              type="number"
              onChange={(e) => {
                const valueAdd = parseInt(e.target.value);
                setText(valueAdd);
              }}
              className="block w-52 p-4 pl-10 text-2xl text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => {
                console.log("cl");
                dispatch(addValue(Number(text)));
              }}
              type="button"
              className="w-50 text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-8"
            >
              <span className=" text-5xl font-bold text-center">ADD</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
export default Counter;
