import React from "react";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <button
              onClick={() => props.handleSort("picture[thumbnail]")}
              className="btn"
            >
              Picture
            </button>
          </th>
          <th scope="col">
            <button
              onClick={() => props.handleSort("name[first]")}
              className="btn"
            >
              Name
            </button>
          </th>
          <th scope="col">
            <button onClick={() => props.handleSort("phone")} className="btn">
              Phone
            </button>
          </th>
          <th scope="col">
            <button onClick={() => props.handleSort("email")} className="btn">
              email
            </button>
          </th>
          <th scope="col">
            <button
              onClick={() => props.handleSort("dob[date]")}
              className="btn"
            >
              Birthday
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
export default Table;
