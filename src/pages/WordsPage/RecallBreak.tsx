import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { WordsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const RecallBreak: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { wordsData } = WordsData();
  const seconds = FormatSeconds(wordsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.words.color}
        title={`Words (${seconds})`}
        time={wordsData.preparationBeforeRecallTime}
        finish={onClick}
        text="Recall starts in"
      />
    </div>
  );
};

export default RecallBreak;
