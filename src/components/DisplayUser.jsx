import React from "react";
import { useSelector } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";

function DisplayUser() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  console.log(data);

  return (
    <>
      {data.length > 0 ? (
        data.map((user, id) => (
          <li key={id} className="flex">
            <h4>
              {id + 1} <span></span>
              {user}
            </h4>
            <button className="btn btn-danger" onClick={() => deleteUser(id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <h1>No Data Found</h1>
      )}
    </>
  );
}

export default DisplayUser;
