import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { cardsData } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
