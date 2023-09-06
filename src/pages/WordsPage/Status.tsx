import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { WordsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { wordsData } = WordsData();
  const seconds = FormatSeconds(wordsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.words.color}
        title={`Words (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
