import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import EmployeeList from "./components/EmployeeList";
import API from "./utils/API";

function App() {

  const [empArray, setEmpArray] = useState([]);
  const [sortEmpArray, setSortEmpArray] = useState([]);
  const [sortCriteria, setSortCriteria] = useState([])
  const [sortAlphaAz, setSortAlphAz] = useState([])

  useEffect(() => {
    API.search()
    .then(res => {
      sept
    })
  }
  return (
    <div className="App">
      <>
        <Table />
        <EmployeeList />
      </>
    </div>
  );
}

export default App;
