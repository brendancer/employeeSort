import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  const [empArray, setEmpArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        const responseArray = response.data.results;
        console.log(responseArray);
        const empArray = responseArray.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );

        console.log(empArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Table empArray={[empArray]} />
    </>
  );
}

export default App;
