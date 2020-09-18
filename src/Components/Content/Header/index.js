import React from "react";
import HeaderController from "./Controller";
import "./index.scss";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="header">
      <Searchbar />
      <HeaderController />
    </div>
  );
};

export default Header;
