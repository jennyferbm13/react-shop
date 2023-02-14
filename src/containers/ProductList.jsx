import React from "react";
import "@style/ProductItem.scss";
import ProductItem from "@components/ProductItem";
const ProductList = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;
