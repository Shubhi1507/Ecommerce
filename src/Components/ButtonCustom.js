import React from "react";
import { baseURL } from "../Constants/API";

export default function ButtonCustom(props) {
  return (
    <div>
      <button onClick={() => props.ABC()}> OKJI </button>
    </div>
  );
}
