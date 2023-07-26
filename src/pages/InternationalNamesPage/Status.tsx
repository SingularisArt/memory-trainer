import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { InternationalNamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { internationalNamesData } = InternationalNamesData();
  const seconds = FormatSeconds(internationalNamesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.internationalNames.color}
        title={`International Names (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
