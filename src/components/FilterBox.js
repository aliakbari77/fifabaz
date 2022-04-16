import React from "react";
import nationalityItems from '../data/Nationality'
import clubItems from '../data/Clubs'
import teamPositionItems from '../data/TeamPositions'

function FilterBox(props) {
  const filters = ["nationality", "club", "team_position"];


  const changeFilter = () => {
    // Your Code ...
  };


  return (
    <div className="filter-box">
      <div>
        <h5 className="card-title">Filter Box</h5>
        {
          // It's Bootstrap accordion example
          // You have to change this part base on description
        }
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  id="btn-FILTER_NAME-collapse"
                  className="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {filters[0]}
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {nationalityItems.map((item, i) =>
                <div key={i}>
                  <input id={i} type="checkbox" onClick={props.onChange} value={item}/>
                  <label className="form-check-label" htmlFor={i} >
                   {item}
                  </label>
                </div>)}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {filters[1]}
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              {clubItems.map((item, i) =>
                <div key={i}>
                  <input id={i} type="checkbox" onClick={props.onChange} value={item}/>
                  <label className="form-check-label" htmlFor={i}>
                   {item}
                  </label>
                </div>)}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {filters[2]}
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              {teamPositionItems.map((item, i) =>
                <div key={i}>
                  <input id={i} type="checkbox" onClick={props.onChange} value={item}/>
                  <label className="form-check-label" htmlFor={i}>
                   {item}
                  </label>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
