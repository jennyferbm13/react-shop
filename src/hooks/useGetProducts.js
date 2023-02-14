import React, { useEffect, useState } from "react";
import axios from "axios";
const useGetProducts = (API) => {
  //save resource and update resource
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      setProducts(response.data);
    }
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
