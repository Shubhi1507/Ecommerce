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
  let [Backup, setBackup] = useState([]);

  function OnChangeHandler(e) {
    if (e.target.value.length > 0) {
      let TempArray = [...AllProducts];
      // console.log(e.target.value.toLowerCase());
      let ResultArray = [];

      TempArray.forEach((Product) => {
        if (
          Product.title.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          ResultArray.push(Product);
        }
      });
      SetAllProducts(ResultArray);

      console.log("ResultArray", ResultArray);
    } else {
      SetAllProducts(Backup);
    }
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
      setBackup(XYZ);
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
          return (
            <div key={index}>
              <ProductItem Item={Product} />
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
