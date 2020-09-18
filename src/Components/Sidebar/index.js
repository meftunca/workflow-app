import React from "react";
import Logo from "./Logo";
import {
  FiActivity,
  FiFolder,
  FiCopy,
  FiFileText,
  FiSettings,
} from "react-icons/fi";
import Item from "./Item";
import "./index.scss";

const items = [
  {
    icon: <FiActivity fontSize={24} />,
    title: "Dashboard",
  },
  {
    icon: <FiFolder fontSize={24} />,
    title: "Folders",
  },
  {
    icon: <FiCopy fontSize={24} />,
    title: "Projects",
  },
  {
    icon: <FiFileText fontSize={24} />,
    title: "Tasks",
  },

  {
    icon: <FiSettings fontSize={24} />,
    title: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar-content">
        {items.map((i, k) => (
          <Item key={k} {...i} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
