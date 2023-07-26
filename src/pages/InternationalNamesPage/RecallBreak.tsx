import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { InternationalNamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const RecallBreak: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { internationalNamesData } = InternationalNamesData();
  const seconds = FormatSeconds(internationalNamesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.internationalNames.color}
        title={`International Names (${seconds})`}
        time={internationalNamesData.preparationBeforeRecallTime}
        finish={onClick}
        text="Recall starts in"
      />
    </div>
  );
};

export default RecallBreak;
