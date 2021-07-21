import React from "react";
import Sidenav from "./sidenav";

const Menu = () => {
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
    <div className="menu">
      <button className="close-icon" onClick={showMenu}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </svg>
      </button>

      <Sidenav />
    </div>
  );
};

export default Menu;
