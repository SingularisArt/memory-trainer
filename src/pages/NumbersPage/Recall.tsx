import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NumbersData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { numbersData } = NumbersData();
  const seconds = FormatSeconds(numbersData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.numbers.color}
        title={`Numbers (${seconds})`}
        time={numbersData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
