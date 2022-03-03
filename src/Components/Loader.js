import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Bars
        heigth="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}
