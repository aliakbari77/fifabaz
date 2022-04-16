import React from "react";


function Table(props) {

  // Use this for showing thead
  const fields = [
    "#",
    "short_name",
    "age",
    "nationality",
    "club",
    "overall",
    "value",
    "preferred_foot",
    "team_position"
  ];
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        <tr>
          {fields.map((field, i) => <th key={i}>
            {field}
          </th>)}
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, i) => <tr key={i}>
          <td>{i}</td>
          <td>{player.short_name}</td>
          <td>{player.age}</td>
          <td>{player.nationality}</td>
          <td>{player.club}</td>
          <td>{player.overall}</td>
          <td>{player.value}</td>
          <td>{player.preferred_foot}</td>
          <td>{player.team_position}</td>
        </tr>)}
      </tbody>
    </table>
  );
}

export default Table;
