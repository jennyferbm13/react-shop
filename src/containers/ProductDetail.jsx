import React from "react";
import "../style/ProductInfo.scss";
import ProductInfo from "../components/ProductInfo";
const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
