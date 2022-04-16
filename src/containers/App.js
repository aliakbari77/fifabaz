import React, { useEffect, useState, Component } from "react";
import Table from "../components/Table";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";
import players from '../data/Players'

// function App() {
//   // Define your state
//   const [filters, setFilters] = useState([])

//   const changeSort = (_selectedSort) => {
//    // ...
//   };

//   const changeFilters = ({currentTarget: input}) => {
//    // ...
//    let checkFilters = filters
//    const index = checkFilters.indexOf(input.value)
//    if (index > -1){
//     checkFilters.splice(index, 1)
//    }
//    else {
//     checkFilters.push(input.value)
//    }
//    console.log(checkFilters);
//    setFilters(checkFilters)
//    console.log(filters);
//   };

//   useEffect(() => {
//     console.log("effect")
//   })

//   const renderTable = () => {
//     let filtered = []
//     if (filters.length > 0){
//       console.log("f")
//       filtered = players.filter(player => player.nationality == filters[0])
//     }
//     else {
//       filtered = players
//     }
//    return <Table players={filtered}/>;
//   };

//   return (
//     <div className="container-fluid my-3">
//       <div className="row">
//         <div className="col-lg-2 col-12">
//           <FilterBox onChange={changeFilters}/>
//         </div>
//         <div className="col-lg-10 col-12">
//           <SortBox />
//           {renderTable()}
//         </div>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  state = { 
    filters: []
   }
   
  changeFilters = ({currentTarget: input}) => {
    // ...
    let checkFilters = this.state.filters
    const index = checkFilters.indexOf(input.value)
    if (index > -1){
     checkFilters.splice(index, 1)
    }
    else {
     checkFilters.push(input.value)
    }
    console.log(checkFilters);
    this.setState({filters: checkFilters})
    console.log(this.state.filters);
   };

  renderTable = () => {
        let filtered = []
        if (this.state.filters.length > 0){
          console.log("f")
          for (let i = 0; i < this.state.filters.length; i++){
            console.log("in fors")
            filtered = filtered.concat(players.filter(p =>( p.nationality == this.state.filters[i]) || ( p.club == this.state.filters[i])))
          }
        }
        else {
          filtered = players
        }
       return <Table players={filtered}/>;
      };

  render() { 
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-lg-2 col-12">
            <FilterBox onChange={this.changeFilters}/>
          </div>
          <div className="col-lg-10 col-12">
            <SortBox />
            {this.renderTable()}
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;

