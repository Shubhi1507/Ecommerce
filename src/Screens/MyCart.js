import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../Components/ProductItem";
import { ACTION_TYPES } from "../Redux/Actions/ActionTypes";

export default function MyCart() {
  let [CartProducts, SetCartProducts] = useState([]);
  let [Total , SetTotal] = useState(0);
 

  const CartData = useSelector((state) => state.CartReducer);
  const Dispatch = useDispatch();

  function EmptyCart(){
    Dispatch({ type: ACTION_TYPES.EMPTY_CART });

  }

  function TotalSum() {
    let sum=0;
    CartData.cartdata.map((Products , index)=> {
      sum = sum + Products.price 
    })
    console.log(sum)
    SetTotal(sum)
  }

  useEffect(() => {
    console.log(CartData);
    TotalSum();
    SetCartProducts(CartData.cartdata);
  }, [CartData]);
  return (
    <div>
      <button onClick={() => {EmptyCart()} }> Empty Cart </button>
      <div>
        {CartProducts.map((Product, index) => {
          return (
            <div key={index}>
              <ProductItem Item={Product} />
            </div>
          );
        })}
      </div>
      <div>
        Total : {Total}
        </div>
    </div>
  );
}
