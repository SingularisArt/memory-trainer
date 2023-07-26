import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { NamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { namesData } = NamesData();
  const seconds = FormatSeconds(namesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.names.color}
        title={`Names (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
