import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NumbersData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { numbersData } = NumbersData();
  const seconds = FormatSeconds(numbersData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.numbers.color}
        title={`Numbers (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
