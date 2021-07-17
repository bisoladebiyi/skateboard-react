import React from "react";
import searchicon from "../icons/Group 2.svg";
import notification from "../icons/Notification.svg";
import arrow from "../icons/chevron_down.svg";
import person from "../images/Group 221.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo">skateboard</h3>
      <form action="">
        <input className="searchbar" type="text" placeholder="Search" />
        <img src={searchicon} className="searchicon" alt="" />
      </form>
      <div className="person-icon">
        <div className="person-img">
          <img src={person} alt="" />
          <p>Thomas</p>
          <img src={arrow} alt="" />
        </div>
        <img src={notification} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
