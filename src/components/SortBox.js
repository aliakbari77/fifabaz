import React, { useState } from "react";
import SortType from "../data/SortType";

function SortBox() {
  // Sorting buttons 
  const fields = ["age", "short_name", "value"];
  const [sortItems, setSortItems] = useState('')
  const [buttonClicked, setButtonClicked] = useState()

  const changeSelectedSort = ({currentTarget: button}) => {
    // Your Code ...
    console.log(button)
    if (sortItems == '') setSortItems(SortType.ASC)
    if (sortItems == SortType.ASC) setSortItems(SortType.DES)
    if (sortItems == SortType.DES) setSortItems('')
    
    setButtonClicked(button.id)
  };

  const setClassName = (item) => {
   // Default sorted => "btn-outline-primary" Non selected button (Third Click)
   // Descending sorted => "btn-success" First Click
   // Ascending sorted => "btn-info" Second Click
   // Your Code ...
   let className ="btn-outline-primary"
   if ('sort-btn-' + item == buttonClicked){

     if (sortItems == SortType.ASC) className = "btn-info"
     else if (sortItems === SortType.DES) className = "btn-success"
     
   }
   return className
  };

  return (
    <div id="sort-box-container" className="d-flex py-2">
      {fields.map((item, i) => <button
      key={i}
        id={"sort-btn-" + item}
        type="button"
        className={"btn mx-2 sort-btn " +  setClassName(item)}
        value={item}
        onClick={changeSelectedSort}
        
      >
        {item}
      </button>)}
      
    </div>
  );
}

export default SortBox;
