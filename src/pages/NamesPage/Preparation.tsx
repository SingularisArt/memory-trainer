import React from "react";

import { NamesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type PreparationProps = {
  onClick: () => void;
};

const Preparation: React.FC<PreparationProps> = ({ onClick }) => {
  const { namesData } = NamesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.names.color}
        title="Names"
        time={namesData.preparationTime}
        finish={onClick}
        text="Memorization starts in"
      />
    </div>
  );
};

export default Preparation;
