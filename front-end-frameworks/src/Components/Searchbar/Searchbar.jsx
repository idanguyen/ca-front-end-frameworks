import React from "react";
var Typeahead = require("react-bootstrap-typeahead").Typeahead; // CommonJS

const Searchbar = ({ search, products }) => {
  const handleSearch = (event) => {
    try {
      search(event[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Typeahead
      labelKey="title"
      placeholder="Search.."
      options={products}
      onChange={handleSearch}
      onInputChange={handleSearch}
    />
  );
};

export default Searchbar;
