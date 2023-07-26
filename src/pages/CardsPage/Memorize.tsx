import React from "react";

import { updateCardsData } from "../../store/actions/cardsActions";
import { CardsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title="Cards"
        time={cardsData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateCardsData}
      />
    </div>
  );
};

export default Memorize;
