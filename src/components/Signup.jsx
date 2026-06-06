import { useState } from "react";

import { signUp } from "aws-amplify/auth";

export default function Signup() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleSignup() {

    try {

      console.log("CURRENT EMAIL =", email);

      const result = await signUp({

        username: email,

        password: password,

        options: {

          userAttributes: {
            email: email
          }
        }
      });

      console.log(result);

      setMessage("Signup Successful, check your email for verification code");

    } catch (err) {

      console.log("FULL ERROR =", err);

      setMessage(err.message);
    }
  }

  return (

    <div>

      <h2>Signup</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {

          console.log("Typing:", e.target.value);

          setEmail(e.target.value);
        }}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

      <p>{message}</p>

    </div>
  );
}