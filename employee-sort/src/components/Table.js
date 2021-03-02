import React from "react";

function Table(props) {
  return (
    <>
      <button onClick={props.sortAscFirst}>Sort by First Name</button>
      <button onClick={props.sortAscLast}>Sort by Last Name</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.empArray.map((props) => (
            <tr key={props.login.uuid}>
              <td>{props.name.first}</td>
              <td>{props.name.last}</td>
              <td>{props.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Table;
