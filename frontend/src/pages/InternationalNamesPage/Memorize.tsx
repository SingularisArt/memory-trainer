import React from "react";

import { updateInternationalNamesData } from "../../store/actions/internationalNamesActions";
import { InternationalNamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { internationalNamesData, dispatch } = InternationalNamesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.internationalNames.color}
        title="International Names"
        time={internationalNamesData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateInternationalNamesData}
      />
    </div>
  );
};

export default Memorize;
