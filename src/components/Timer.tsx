import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

type TimerProps = {
  seconds?: number;
  onFinish?: () => void;
  className?: string;
  text?: string;
};

const Timer: React.FC<TimerProps> = ({
  seconds,
  onFinish,
  className,
  text,
}) => {
  if (seconds === undefined) {
    return (
      <div className={className}>
        <Typography className="title" gutterBottom variant="h5" component="div">
          {text}
        </Typography>
      </div>
    );
  };

  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(interval);
        if (onFinish) {
          onFinish();
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time, onFinish]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;

  return (
    <div className={className}>
      <Typography className="title" gutterBottom variant="h5" component="div">
        {text} {`${formatTime(minutes)}:${formatTime(remainingSeconds)}`}
      </Typography>
    </div>
  );
};

export default Timer;
