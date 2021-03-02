import React from "react";

function Search(props) {
  return (
    <input
      classname="form-control mr-sm-2"
      type="search"
      palceholder="search"
      onChange={props.handleSearch}
    />
  );
}
export default Search;
