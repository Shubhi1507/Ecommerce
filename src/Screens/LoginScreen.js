import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen(props) {
  const [emailState, SetemailState] = useState("");
  const [PasswordState, SetPasswordState] = useState("");

  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (emailState === "" || PasswordState === "") {
      return alert("Empty fields");
    } else {
      const temp = JSON.parse(localStorage.getItem("user"));
      console.log(temp);
      if (
        temp.emailState === emailState &&
        temp.PasswordState === PasswordState
      ) {
        navigate("/", { replace: true });
        console.log("Success");
      } else {
        console.log("Fail");
      }
      //   console.log(emailState + PasswordState);
      //   let user = {emailState , PasswordState}
      //   localStorage.setItem("user" , JSON.stringify(user));
    }
  }

  return (
    <div>
      <h1>Login Screen </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your E-mail:
          <input
            required
            type="email"
            value={emailState}
            onChange={(e) => SetemailState(e.target.value)}
          />
        </label>
        <label>
          Enter your Password :
          <input
            type={"password"}
            value={PasswordState}
            onChange={(e) => SetPasswordState(e.target.value)}
          />
        </label>
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
