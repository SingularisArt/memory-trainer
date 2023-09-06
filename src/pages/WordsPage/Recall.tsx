import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { WordsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { wordsData } = WordsData();
  const seconds = FormatSeconds(wordsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.words.color}
        title={`Words (${seconds})`}
        time={wordsData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
