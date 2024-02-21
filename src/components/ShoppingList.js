import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {

  const [category, setCategory] = useState("All")
  
  const filteredItems = items.filter(item => {
    if(category === "All"){
      return true
    }
    else{
      return item.category === category
    }
  })

  function updateCategory(event){
    setCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={updateCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
