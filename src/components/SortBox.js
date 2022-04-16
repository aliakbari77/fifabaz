import React, { useState } from "react";
import SortType from "../data/SortType";

function SortBox() {
  

  // Sorting buttons 
  const fields = ["age", "short_name", "value"];

  const changeSelectedSort = (e) => {
    // Your Code ...
    
  };

  const setClassName = (e) => {
   // Default sorted => "btn-outline-primary" Non selected button (Third Click)
   // Descending sorted => "btn-success" First Click
   // Ascending sorted => "btn-info" Second Click
   // Your Code ...
   
  };

  return (
    <div id="sort-box-container" className="d-flex py-2">
      {fields.map((item, i) => <button
      key={i}
        id={"sort_" + item}
        type="button"
        className={"btn mx-2 sort-btn btn-outline-primary"}
        value={item}
      >
        {item}
      </button>)}
      
    </div>
  );
}

export default SortBox;
