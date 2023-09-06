import React from "react";

import { updateNumbersData } from "../../store/actions/numbersActions";
import { NumbersData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { numbersData, dispatch } = NumbersData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.numbers.color}
        title="Numbers"
        time={numbersData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateNumbersData}
      />
    </div>
  );
};

export default Memorize;
