import React from "react";
import {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function toggleInCart(){
    setInCart((inCart) => !inCart)
  }

  const liClass = inCart ? "in-cart" : ""

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleInCart} className={inCart ? "remove" : "add"}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
