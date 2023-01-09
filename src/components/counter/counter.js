import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const selectorName = useSelector((state) => state.counter.name);
  const selectorTodo = useSelector((state) => state.counter.todo);

  const dispatch = useDispatch();
  return (
    <div>
      {selectorName}
      {selectorTodo}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          // aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
