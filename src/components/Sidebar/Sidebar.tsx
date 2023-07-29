import { mainTheme } from "../../config/theme";
import "./Sidebar.css";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div onClick={ToggleSidebar}>
          <button className="sidebar-btn">
            <TbLayoutSidebarLeftExpand />
          </button>
        </div>
        <div
          className={`sidebar ${isOpen == true ? "active" : ""}`}
          style={{ width: mainTheme.sidebar.width }}
        >
          <div className="sd-header">
            <Typography gutterBottom variant="h5" component="div">
              Sidebar
            </Typography>
            <div onClick={ToggleSidebar}>
              <button className="sidebar-btn">
                <TbLayoutSidebarLeftCollapse />
              </button>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <Link to="/" className="sd-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cards" className="sd-link">
                  Cards
                </Link>
              </li>
              <li>
                <Link to="/images" className="sd-link">
                  Images
                </Link>
              </li>
              <li>
                <Link to="/international-names" className="sd-link">
                  International Names
                </Link>
              </li>
              <li>
                <Link to="/names" className="sd-link">
                  Names
                </Link>
              </li>
              <li>
                <Link to="/numbers" className="sd-link">
                  Numbers
                </Link>
              </li>
              <li>
                <Link to="/words" className="sd-link">
                  Words
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
