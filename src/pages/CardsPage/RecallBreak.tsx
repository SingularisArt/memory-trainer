import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const RecallBreak: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { cardsData } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        time={cardsData.preparationBeforeRecallTime}
        finish={onClick}
        text="Recall starts in"
      />
    </div>
  );
};

export default RecallBreak;
