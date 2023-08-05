import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../store/slice/GituserSlice";

function GitUsers() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  console.log(data.users);
  return (
    <div>
      <h1>User details</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(getAllData());
        }}
      >
        Get Users
      </button>
      <ul>
        {data.users.users.map((ele) => (
          <li key={ele.id}>
            <h1> {ele.first_name}</h1>
            <h2>{ele.job}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitUsers;
