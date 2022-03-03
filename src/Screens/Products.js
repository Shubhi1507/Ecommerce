import React, { useEffect, useState } from "react";
import ButtonCustom from "../Components/ButtonCustom";
import { baseURL } from "../Constants/API";
import ProductItem from "../Components/ProductItem";
import NavBar from "../Components/NavBar";
import Loader from "../Components/Loader";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  let [AllProducts, SetAllProducts] = useState([]);
  let [Loading, SetLoading] = useState(false);
  let [SearchQuery, SetSearchQuery] = useState("");
  let [SearchedResults, setSearchedResults] = useState([]);

  function OnChangeHandler(e) {
    SetSearchQuery(e.target.value);
    let TempArray = [...AllProducts];
  }

  useEffect(() => {
    SetLoading(true);
    CallAPI();
  }, []);
  async function CallAPI() {
    try {
      const XYZ = await (await fetch(baseURL + "products")).json();
      console.log(XYZ);
      SetAllProducts(XYZ);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function Ashutosh() {
    console.log(" Maha Chutia Admi");
  }
  return (
    <div style={{ flex: 1, alignItems: "center" }}>
      <input
        type={"text"}
        onChange={(e) => OnChangeHandler(e)}
        placeholder={"Search Here"}
      />

      {/* <NavBar onSearchTextChange  /> */}
      {Loading && <Loader />}

      <ButtonCustom ABC={Ashutosh} />
      <Link to="details">Contact</Link>

      <div>
        {AllProducts.map((Product, index) => {
          return <ProductItem Item={Product} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
