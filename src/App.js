import { Component } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Screens/ErrorPage";
import ProductDetail from "./Screens/ProductDetail";
import Products from "./Screens/Products";
import TestScreeen from "./Screens/TestScreeen";

function App() {
  return (
    <BrowserRouter>
      {/*High Order comp*/}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="details" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
