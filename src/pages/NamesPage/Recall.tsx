import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { namesData } = NamesData();
  const seconds = FormatSeconds(namesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.names.color}
        title={`Names (${seconds})`}
        time={namesData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
