import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTION_CONSTANTS } from "../Redux/Actions/ActionConstants";

export default function LoginScreen(props) {
  const [emailState, SetemailState] = useState("");
  const [PasswordState, SetPasswordState] = useState("");
  const ReduxData = useSelector((state) => state.AuthReducer);
  const Dispatch = useDispatch();
  let navigate = useNavigate();
  

  useEffect(() => {
    console.log(ReduxData);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailState === "" || PasswordState === "") {
      return alert("Empty fields");
    } else {
      let ABC = { emailState, PasswordState };

      Dispatch({ type: ACTION_CONSTANTS.SIGN_IN_SUCCESS, payload: ABC });
      navigate("/", { replace: true });
      // console.log("Success");

      //AUTHENTICATION BY LOCAL STORAGE
      // const temp = JSON.parse(localStorage.getItem("user"));
      // console.log(temp);
      // if (
      //   temp.emailState === emailState &&
      //   temp.PasswordState === PasswordState
      // ) {

      // } else {
      //   console.log("Fail");
      // }
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
