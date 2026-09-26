import React from "react";
import ProductItem from "./ProductItem";


const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

function ProductList({props}) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={props.addToCart()}
        />
      ))}
    </div>
  );
}

export default ProductList;