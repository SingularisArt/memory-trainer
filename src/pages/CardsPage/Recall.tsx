import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { cardsData } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        time={cardsData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
