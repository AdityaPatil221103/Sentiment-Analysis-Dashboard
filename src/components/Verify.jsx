import React, { useState } from "react";

import {
  confirmSignUp
} from "aws-amplify/auth";


export default function Verify() {

  const [email, setEmail] =
    useState("");

  const [code, setCode] =
    useState("");

  const [msg, setMsg] =
    useState("");


  async function handleVerify() {

    try {

      await confirmSignUp({

        username: email,
        confirmationCode: code

      });

      setMsg("Verification Successful");

    } catch (err) {

      setMsg(err.message);
    }
  }

  return (

    <div>

      <h1>Verify Email</h1>

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
        type="text"
        placeholder="Enter OTP"
        value={code}
        onChange={(e) =>
          setCode(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleVerify}>
        Verify
      </button>

      <p>{msg}</p>

    </div>
  );
}