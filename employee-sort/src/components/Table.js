import React, { useState } from "react";

function Table(props) {
  console.log(props);
  const [tableArray, setTableArray] = useState([]);

  setTableArray(props.empArray.e);
  console.log(tableArray);

  console.log(tableArray);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((employees) => (
            <tr key={employees.login.uuid}>
              <td>{employees.name.first}</td>
              <td>{employees.name.last}</td>
              <td>{employees.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Table;
