import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { InternationalNamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { internationalNamesData } = InternationalNamesData();
  const seconds = FormatSeconds(internationalNamesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.internationalNames.color}
        title={`International Names (${seconds})`}
        time={internationalNamesData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
