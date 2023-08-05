import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";

function DeleteAll() {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={() => deleteAllUsers()}>
        Delete All User
      </button>
    </div>
  );
}

export default DeleteAll;
