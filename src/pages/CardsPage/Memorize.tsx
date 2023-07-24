import React from "react";

import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { cardsData } = CardsData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title="Cards"
        time={cardsData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="memory"
      />
    </div>
  );
};

export default Memorize;
