import React from "react";

import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { cardsData } = CardsData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title="Cards"
        finish={onClick}
        text="Status"
        button="finish"
      />
    </div>
  );
};

export default Status;
