import React, {useState} from "react";

function Search(props) {

  const [searchArray, setSearchArray] = useState([])

  function handleSearch = event ={
    const nameToFind = e.target.value;
    const normName = nameToFind.toLowerCase()

    empArray.filter(elements => elements.name.first.includes(normName))
    return
  }
  return (
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={props.handleSearch}
    />
  );
}

export default Search;
