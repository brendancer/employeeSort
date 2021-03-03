import React from "react";

function SortButtons(props) {
  const sortFirst = (props) => {
    tableArray.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
  };

  const sortLast = (props) => {
    let lastNameArray = props.empArray.sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    setTableArray(lastNameArray);
  };

  <button onClick={sortFirst}>Sort by First Name</button>;
  <button onClick={sortLast}>Sort by Last Name</button>;
}
export default SortButtons;
