import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type ScoreProps = {
  onClick: () => void;
};

const Score: React.FC<ScoreProps> = ({ onClick }) => {
  const { cardsData } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        finish={onClick}
        text="Score"
        button="continue"
      />
    </div>
  );
};

export default Score;
