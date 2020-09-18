import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiMessageCircle, FiBell } from "react-icons/fi";
import "./Controller.scss";

const HeaderController = () => {
  return (
    <div className="header-controller">
      <FiMessageCircle fontSize={24} />
      <FiBell fontSize={24} />
      <DateTime />
    </div>
  );
};

function monthName(mon) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ][mon % 12];
}

const formatTime = (value) => (value < 10 ? "0" + value : value);

const DateTime = ({}) => {
  const [date, setDate] = useState(new Date());

  useLayoutEffect(() => {
    setDate(new Date());
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const time =
    formatTime(date.getHours()) +
    ":" +
    formatTime(date.getMinutes()) +
    ":" +
    formatTime(date.getSeconds());
  const today = date.getDate() + " " + monthName(date.getMonth());
  return (
    <div className="date-time">
      <h1 className="time">{time}</h1>
      <h5 className="date">{today}</h5>
    </div>
  );
};

export default HeaderController;
