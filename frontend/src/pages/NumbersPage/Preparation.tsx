import React from "react";

import { NumbersData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type PreparationProps = {
  onClick: () => void;
};

const Preparation: React.FC<PreparationProps> = ({ onClick }) => {
  const { numbersData } = NumbersData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.numbers.color}
        title="Numbers"
        time={numbersData.preparationTime}
        finish={onClick}
        text="Memorization starts in"
      />
    </div>
  );
};

export default Preparation;
