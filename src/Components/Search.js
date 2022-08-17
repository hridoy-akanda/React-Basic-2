import React, { useState, useEffect } from "react";

import "./search.module.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <>
      <input
        type="text"
        placeholder="search country"
        value={searchText}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
