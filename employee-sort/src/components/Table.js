import React, { useState, useEffect } from "react";

function Table(props) {
  const [tableArray, setTableArray] = useState([]);

  useEffect(() => {
    setTableArray(props.empArray);
    console.log(tableArray);
  });
  // const sortFirst = (props) => {
  //   empArrayProps.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
  // };

  // const sortLast = (props) => {
  //   let lastNameArray = props.empArray.sort((a, b) =>
  //     a.name.last > b.name.last ? 1 : -1
  //   );
  //   setTableArray(lastNameArray);
  // };

  return (
    <>
      {/* <button onClick={sortFirst}>Sort by First Name</button>;
      <button onClick={sortLast}>Sort by Last Name</button>; */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.empArray.map((employees) => (
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
