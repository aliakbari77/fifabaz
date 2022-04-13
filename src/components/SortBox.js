import React, { useState } from "react";
import SortType from "../data/SortType";

function SortBox() {
  const [itemSelected, setItemSelected] = useState('')
  const [sortItem, setSortItem] = useState("btn mx-2 sort-btn btn-outline-primary")

  // Sorting buttons 
  const fields = ["age", "short_name", "value"];

  const changeSelectedSort = (e) => {
    // Your Code ...
    console.log(e.currentTarget)
    setItemSelected(e.currentTarget.value)
    setClassName(e)
  };

  const setClassName = (e) => {
   // Default sorted => "btn-outline-primary" Non selected button (Third Click)
   // Descending sorted => "btn-success" First Click
   // Ascending sorted => "btn-info" Second Click
   // Your Code ...
   console.log(e.currentTarget.className);
   if (e.currentTarget.className === sortItem) {
     setSortItem("btn mx-2 sort-btn btn-success")
   }
  };

  return (
    <div id="sort-box-container" className="d-flex py-2">
      {fields.map((item, i) => <button
      key={i}
        id={"sort_" + item}
        type="button"
        className={sortItem}
        onClick={changeSelectedSort}
        value={item}
      >
        {item}
      </button>)}
      
    </div>
  );
}

export default SortBox;
