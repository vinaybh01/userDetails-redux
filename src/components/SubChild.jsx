import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../store/slice/SampleSlice";

function SubChild() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.sample.value;
  });
  console.log(data);

  const add = (payload) => {
    dispatch(addNumber(payload));
  };

  //   const subtract = (payload) => {
  //     dispatch(subNumber(payload));
  //   };

  return (
    <div>
      <h1>Subchild {data}</h1>
      <button onClick={() => add(10)}>+</button>
      <button onClick={() => dispatch(subNumber(10))}>-</button>
    </div>
  );
}

export default SubChild;
