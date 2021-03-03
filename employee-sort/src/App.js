import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import API from "./utils/API";

function App() {
  const [empArray, setEmpArray] = useState([]);

  useEffect(() => {
    API.search().then((res) => {
      setEmpArray(res.data.results);
    });
  }, []);
  console.log(empArray);
  return (
    <>
      <Header />
      <Table empArray={empArray} />
    </>
  );
}
export default App;
