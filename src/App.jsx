import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  increseByAmount,
} from "./redux/features/counteSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(null)
  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col justify-center items-center gap-4 ">
      <h1 className="font-bold text-2xl">{count}</h1>
      <button
        className="px-3 py-2 bg-amber-500 rounded-2xl cursor-pointer active:scale-95"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="px-3 py-2 bg-amber-500 rounded-2xl cursor-pointer active:scale-95"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <input
        type="Number"
        className="px-3 py-3 bg-amber-100 border-2 border-amber-500 w-2sm"
        onChange={(e)=>setNum(e.target.value)}
      />
      <button
        className="px-3 py-2 bg-amber-500 rounded-2xl cursor-pointer active:scale-95"
        onClick={() => dispatch(increseByAmount(Number(num)))}
      >
        increse by {num}
      </button>
    </div>
  );
};

export default App;
