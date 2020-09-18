import React from "react";
import Content from "./Content";
import "./index.scss";
import Sidebar from "./Sidebar";
const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
