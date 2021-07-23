import React from "react";
import searchicon from "../icons/Group 2.svg";
import notification from "../icons/Notification.svg";
import arrow from "../icons/chevron_down.svg";
import person from "../images/Group 221.svg";

const Navbar = () => {
    const showMenu = () => {
        let menu = document.querySelector(".menu")
        if (menu.style.left !== "0px") {
          menu.setAttribute("style", "left: 0;");
        }
         else {
          menu.setAttribute("style", "left: -300px;");
        }
    };
  return (
    <div className="navbar">
        <div className="logo-menu">
            <button className="menu-icon" onClick={showMenu}>
            <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
            </button>
        
        <h3 className="logo">skateboard</h3>
        </div>
  
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
        <img src={notification} alt=""className="notification" />
      </div>
    </div>
  );
};

export default Navbar;
