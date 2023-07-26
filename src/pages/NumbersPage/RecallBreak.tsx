import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NumbersData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const RecallBreak: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { numbersData } = NumbersData();
  const seconds = FormatSeconds(numbersData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.numbers.color}
        title={`Numbers (${seconds})`}
        time={numbersData.preparationBeforeRecallTime}
        finish={onClick}
        text="Recall starts in"
      />
    </div>
  );
};

export default RecallBreak;
