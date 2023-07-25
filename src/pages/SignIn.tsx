import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignIn = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignIn = async () => {
    await signIn("credentials", {
      username: UserName,
      password: Password,
    });
  };

  return (
    <div>
      <input
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="btn" onClick={() => handleSignIn()}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
