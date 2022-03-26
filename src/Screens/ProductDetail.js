import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const userdata = useSelector((state) => state.AuthReducer);
  let navigate = useNavigate();
  console.log("userdata", userdata);

  // useEffect(() => {
  //   if (userdata.IsLoggedIn) {
  //     ;
  //   } else {
  //     navigate("login" , {replace: true});
  //   }
  // }, []);

  return <div>ProductDetail</div>;
}
