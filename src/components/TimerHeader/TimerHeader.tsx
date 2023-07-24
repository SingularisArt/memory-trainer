import React from "react";

import Typography from "@mui/material/Typography";

import Button from "../Button";
import Timer from "../Timer";

import "./TimerHeader.css";

type TimerHeaderProps = {
  title: string;
  color: string;
  time?: number;
  finish: () => void;
  text?: string;
  button?: string;
};

const TimerHeader: React.FC<TimerHeaderProps> = ({
  title,
  color,
  time,
  finish,
  text,
  button = "break",
}) => {
  return (
    <header className="header">
      <div style={{ justifyContent: "left" }}>
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

      <div className="timer" style={{ flex: 1 }}>
        <Timer seconds={time} onFinish={finish} text={text} />
      </div>

      <div>
        {button === "break" ? (
          <Button text="Skip" onClick={finish} />
        ) : button === "finish" ? (
          <Button text="Continue" color="success" onClick={finish} />
        ) : (
          <Button text="Finished" color="success" onClick={finish} />
        )}
      </div>
    </header>
  );
};

export default TimerHeader;
