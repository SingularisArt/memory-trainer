import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const RecallBreak: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { namesData } = NamesData();
  const seconds = FormatSeconds(namesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.names.color}
        title={`Names (${seconds})`}
        time={namesData.preparationBeforeRecallTime}
        finish={onClick}
        text="Recall starts in"
      />
    </div>
  );
};

export default RecallBreak;
