import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <FiSearch fontSize={24} />
      <input placeholder={"Search"} />
    </div>
  );
};

export default Searchbar;
