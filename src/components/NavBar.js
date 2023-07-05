import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import calendarcheck from "../images/calendarcheck.png";
import userprofile from "../images/userprofile.png";
import alertcircle from "../images/alertcircle.png";
import settingicon from "../images/settingicon.png";
import Booking from "./Booking";

const NavBar = () => {
  const [user, setUser] = useState([
    {
      img: userprofile,
      name: "Nishant Choudhari",
    },
  ]);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-left">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-right">
          <img src={alertcircle} className="topbar_icon" />
          <img src={settingicon} className="topbar_icon set_icn" />
          <img src={calendarcheck} className="topbar_icon" />
          {user.map((item, index) => (
            <>
              <img src={item.img} className="nav-icon" />
              <p className="topbar_para">{item.name}</p>
              <BsChevronDown className="downarrow_nav" />
            </>
          ))}
        </div>
      </nav>
      <Booking />
    </>
  );
};

export default NavBar;
