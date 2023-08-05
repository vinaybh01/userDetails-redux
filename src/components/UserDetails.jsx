import React from "react";
import DeleteAll from "./DeleteAll";
import fakeUserFetch from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import DisplayUser from "./DisplayUser";
import "../App.css";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
    // console.log(payload);
  };

  return (
    <div className="users">
      <div className="list flex">
        <h1>List of users</h1>
        <button
          className="btn btn-primary btns"
          onClick={() => addNewUser(fakeUserFetch())}
        >
          Add user
        </button>
      </div>
      <ul>
        <DisplayUser />
      </ul>
      <DeleteAll />
    </div>
  );
};

export default UserDetails;
