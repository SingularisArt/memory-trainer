import React from "react";

import { InternationalNamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type PreparationProps = {
  onClick: () => void;
};

const Preparation: React.FC<PreparationProps> = ({ onClick }) => {
  const { internationalNamesData } = InternationalNamesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.internationalNames.color}
        title="International Names"
        time={internationalNamesData.preparationTime}
        finish={onClick}
        text="Memorization starts in"
      />
    </div>
  );
};

export default Preparation;
