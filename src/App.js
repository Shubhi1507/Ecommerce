import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./Redux/Store/Store";
import ErrorPage from "./Screens/ErrorPage";
import LoginScreen from "./Screens/LoginScreen";
import MyCart from "./Screens/MyCart";
import ProductDetail from "./Screens/ProductDetail";
import Products from "./Screens/Products";
import TestScreeen from "./Screens/TestScreeen";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      {/*High Order comp*/}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="details" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="login" element ={<LoginScreen/>}/>
        <Route path="cart" element={<MyCart/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
