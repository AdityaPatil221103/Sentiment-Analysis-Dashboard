import { useState } from "react";

import { confirmSignUp }
from "aws-amplify/auth";


export default function ConfirmSignup() {

  const [email, setEmail] =
    useState("");

  const [code, setCode] =
    useState("");

  const [message, setMessage] =
    useState("");


  async function handleConfirm() {

    try {

      await confirmSignUp({

        username: email,

        confirmationCode: code
      });

      setMessage(
        "Email Verified Successfully, you can login now"
      );

    } catch (err) {

      console.log(err);

      setMessage(err.message);
    }
  }

  return (

    <div>

      <h2>Verify Email</h2>

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

      <button
        onClick={handleConfirm}
      >
        Verify
      </button>

      <p>{message}</p>

    </div>
  );
}