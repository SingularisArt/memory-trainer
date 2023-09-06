import React from "react";
import { Link } from "react-router-dom";

import { ImStatsBars } from "react-icons/im";
import Typography from "@mui/material/Typography";

import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";

import "./Header.css";

type HeaderProps = {
  title: string;
  color: string;
  image?: string;
  link?: string;
  buttonText?: string;
};

const Header: React.FC<HeaderProps> = ({
  title,
  color,
  image,
  link,
  buttonText,
}) => {
  return (
    <header className="header">
      <div className="main-div-header">
        <Sidebar />

        <Typography
          className="title"
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: color }}
        >
          {title}
        </Typography>
      </div>

      <div style={{ flex: 1 }}>
        {image ? (
          <Link to="/">
            <img src={image} height="80px" alt="logo" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <div className="div-stats-button">
        {link ? (
          buttonText ? (
            <Link to={link}>
              <Button
                className="stats-button"
                text={buttonText}
              />
            </Link>
          ) : (
            <Link to={link}>
              <Button
                icon={<ImStatsBars />}
                className="stats-button"
                text="Stats"
              />
            </Link>
          )
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};

export default Header;
