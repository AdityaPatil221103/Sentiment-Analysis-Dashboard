import React, { useState } from "react";

import {
  signIn
} from "aws-amplify/auth";


export default function Login({
  setIsLoggedIn
}) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [msg, setMsg] =
    useState("");


  async function handleLogin() {

    try {

      const user =
        await signIn({

          username: email,
          password: password

        });

      localStorage.setItem(
        "token",
        "loggedin"
      );

      setIsLoggedIn(true);

      setMsg("Login Successful");

    } catch (err) {

      setMsg(err.message);
    }
  }

  return (

    <div>

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <p>{msg}</p>

    </div>
  );
}