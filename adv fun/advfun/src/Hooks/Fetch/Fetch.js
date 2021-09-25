import React, { useState, useEffect } from "react";
import { useFetch } from "./Usefetch";
import Product from "../prop-types/Product";
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  // !we can create custom hooks to make clean code

  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  //   setProducts(products);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { loading, products } = useFetch(url);

  console.log(products);

  return (
    <div>
      <h2>{loading ? "LOading..." : "data"}</h2>
      {products.map((product)=>{
        return <Product key={product.id} {...product} />
      })}
    </div>
  );
};

export default Example;
