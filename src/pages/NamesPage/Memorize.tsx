import React from "react";

import { updateNamesData } from "../../store/actions/namesActions";
import { NamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { namesData, dispatch } = NamesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.names.color}
        title="Names"
        time={namesData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateNamesData}
      />
    </div>
  );
};

export default Memorize;
