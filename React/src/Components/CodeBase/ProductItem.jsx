import React, { useState } from "react";

function ProductItem({ product, addToCart }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    addToCart(product);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={handleClick}>
        {clicked ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductItem;