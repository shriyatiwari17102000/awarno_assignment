import React, { useState } from "react";
import logo from "../images/logo.png";
import settings from "../images/settings.png";
import dash_img from "../images/dash_img.png";
import all_stu from "../images/all_stu.png";
import bookings_img from "../images/bookings_img.png";
import community_img from "../images/community_img.png";
import msg_img from "../images/msg_img.png";
import notification_img from "../images/notification_img.png";
import support_img from "../images/support_img.png";
import preference_img from "../images/preference_img.png";
import userprofile from "../images/userprofile.png";
import NavBar from "./NavBar";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="left-nav">
        <div className="top-items">
          <div style={{ display: "flex" }}>
            <img src={logo} className="logo_css" />
            <h3 className="head_css"> Videshify</h3>
          </div>
          <p className="sidebar_para">Generals</p>
          <ul>
            <li
              style={{ display: "flex" }}
              className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0)}
            >
              <img
                src={dash_img}
                className={`side_bar_img ${
                  activeItem === 0 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 0 ? "active-text" : ""
                }`}
              >
                Dashboard
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1)}
            >
              <img
                src={all_stu}
                className={`side_bar_img ${
                  activeItem === 1 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 1 ? "active-text" : ""
                }`}
              >
                All Students
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2)}
            >
              <img
                src={bookings_img}
                className={`side_bar_img ${
                  activeItem === 2 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 2 ? "active-text" : ""
                }`}
              >
                Bookings
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 3 ? "active" : ""}
              onClick={() => handleItemClick(3)}
            >
              <img
                src={community_img}
                className={`side_bar_img ${
                  activeItem === 3 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 3 ? "active-text" : ""
                }`}
              >
                Community
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 4 ? "active" : ""}
              onClick={() => handleItemClick(4)}
            >
              <img
                src={msg_img}
                className={`side_bar_img ${
                  activeItem === 4 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 4 ? "active-text" : ""
                }`}
              >
                Message
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 5 ? "active" : ""}
              onClick={() => handleItemClick(5)}
            >
              <img
                src={notification_img}
                className={`side_bar_img ${
                  activeItem === 5 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 5 ? "active-text" : ""
                }`}
              >
                Notification
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 6 ? "active" : ""}
              onClick={() => handleItemClick(6)}
            >
              <img
                src={support_img}
                className={`side_bar_img ${
                  activeItem === 6 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 6 ? "active-text" : ""
                }`}
              >
                Support
              </p>
            </li>

            <li
              style={{ display: "flex" }}
              className={activeItem === 7 ? "active" : ""}
              onClick={() => handleItemClick(7)}
            >
              <img
                src={support_img}
                className={`side_bar_img ${
                  activeItem === 7 ? "active-img" : ""
                }`}
              />
              <p
                className={`side_bar_para ${
                  activeItem === 7 ? "active-text" : ""
                }`}
              >
                Plan & Billing
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="sidebar_para">Settings</p>
          <ul>
            <li
              style={{ display: "flex" }}
              className={activeItem === 8 ? "active" : ""}
              onClick={() => handleItemClick(8)}
            >
              <img src={all_stu} className="side_bar_img" />
              <p className="side_bar_para">Roles</p>
            </li>

            <li style={{ display: "flex" }}>
              <img src={preference_img} className="side_bar_img" />

              <p className="side_bar_para">Preferences</p>
            </li>

            <li style={{ display: "flex" }}>
              <img src={settings} className="side_bar_img" />
              <p className="side_bar_para">Profile</p>
            </li>
          </ul>
        </div>
        <div className="bottom-user">
          <div className="user-info">
            <img src={userprofile} roundedCircle className="user-avatar" />

            <p className="user-name">Nishant Choudhari</p>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Sidebar;
