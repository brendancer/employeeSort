import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  const [empArray, setEmpArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=25&nat=US")
      .then((response) => {
        setEmpArray(response.data.results);
        // const sortedArray = responseArray.sort((a, b) =>
        //   a.name.first.localeCompare(b.name.first)
        // );

        // setFilteredArray(resopnseArray);
      })
      .catch((err) => console.log(err));
  }, []);

  function sortAscFirst() {
    let ascArray = [...empArray].sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setEmpArray(ascArray);
  }

  function sortAscLast() {
    let ascArray = [...empArray].sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    setEmpArray(ascArray);
  }

  return (
    <>
      <Header />
      <Table
        empArray={empArray}
        sortAscFirstProps={sortAscFirst()}
        sortAscLastProps={sortAscLast()}
      />
    </>
  );
}

export default App;
