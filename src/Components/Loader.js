import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Bars
        heigth="1800"
        width="1800"
        color="black"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}
