import React, { useState, useEffect } from "react";

import Dashboard from "./components/Dashboard";

import Login from "./components/Login";

import Signup from "./components/Signup";

import Verify from "./components/Verify";


export default function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {

      setIsLoggedIn(true);
    }

  }, []);


  if (isLoggedIn) {

    return <Dashboard />;
  }

  return (

    <div>

      <Signup />

      <hr />

      <Verify />

      <hr />

      <Login setIsLoggedIn={setIsLoggedIn} />

    </div>
  );
}

