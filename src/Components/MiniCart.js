import { ArrowRightAltTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../Redux/Actions/ActionTypes";

export default function MiniCart() {
  let [CartProducts, SetCartProducts] = useState([]);

  const Dispatch = useDispatch();

  const CartData = useSelector((state) => state.CartReducer);

  function RemovefromCart(Product, index) {
    
    let temp = [...CartProducts];
    const filtered = temp.filter((obj) => Product.title !== obj.title); // Obj denotes temp array individual elements
    SetCartProducts(filtered);

    Dispatch({ type: ACTION_TYPES.UPDATE_CART, payload: filtered });
  }

  useEffect(() => {
    console.log(CartData);
    SetCartProducts(CartData.cartdata);
  }, [CartData]);

  return (
    <div>
      {CartProducts.map((Product, index) => {
        return (
          <div key={index}>
            <img src={Product.image} alt="image" height="100" width="100" />

            <button onClick={() => RemovefromCart(Product, index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
