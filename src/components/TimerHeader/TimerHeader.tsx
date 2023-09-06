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
  updateFinishedTime?: boolean;
  dispatch?: any;
  updateData?: any;
};

const TimerHeader: React.FC<TimerHeaderProps> = ({
  title,
  color,
  time,
  finish,
  text,
  button = "skip",
  updateFinishedTime = false,
  dispatch,
  updateData,
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
        <Timer
          seconds={time}
          onFinish={finish}
          text={text}
          updateFinishedTime={updateFinishedTime}
          dispatch={dispatch}
          updateData={updateData}
        />
      </div>

      <div>
        {button === "skip" ? (
          <Button text="Skip" onClick={finish} />
        ) : button === "continue" ? (
          <Button text="Continue" color="success" onClick={finish} />
        ) : button === "finished" ? (
          <Button text="Finished" color="success" onClick={finish} />
        ) : null}
      </div>
    </header>
  );
};

export default TimerHeader;
