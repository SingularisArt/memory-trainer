import React from "react";

import { WordsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type PreparationProps = {
  onClick: () => void;
};

const Preparation: React.FC<PreparationProps> = ({ onClick }) => {
  const { wordsData } = WordsData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.words.color}
        title="Words"
        time={wordsData.preparationTime}
        finish={onClick}
        text="Memorization starts in"
      />
    </div>
  );
};

export default Preparation;
