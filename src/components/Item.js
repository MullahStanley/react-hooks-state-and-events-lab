import React, {useState} from "react";

function Item({ name, category }) {
  const[addCart,setAddCart]= useState(true)

  function cartHandler(e){
    setAddCart((setAddCart)=>!setAddCart)
  }
  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandler}>{addCart ? "Add to cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
