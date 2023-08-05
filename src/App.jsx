import React from "react";
import "./App.css";
// import UserDetails from "./components/UserDetails";
// import Sample from "./components/Sample";
// import { useSelector } from "react-redux";
// import GitUsers from "./components/GitUsers";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div className="App">
      <UserDetails />
    </div>
  );
};

export default App;
