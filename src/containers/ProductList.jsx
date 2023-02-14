import React from "react";
import "@style/ProductItem.scss";
import useGetProducts from "../hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

import ProductItem from "@components/ProductItem";
const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <ProductItem />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
