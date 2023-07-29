import React, { useEffect, useState } from "react";

import { updateCardsData } from "../../store/actions/cardsActions";
import { CardsData } from "../../utils/redux";

import DisplayCards from "../../components/DisplayCards/DisplayCards";
import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { randomDeckOfCards } from "../../utils/misc";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const item = cardsData.item;
  let decks: number;
  let cards: number;

  if (item === "Cards") {
    decks = 1;
    cards = cardsData.numberOfCards;
  } else {
    decks = cardsData.numberOfDecks;
    cards = 52;
  }

  const [data, setData] = useState<{ [deckId: number]: string[] }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deckData: { [deckId: number]: string[] } = {};

    for (let i = 1; i <= decks; i++) {
      deckData[i] = randomDeckOfCards(cards);
    }

    setData(deckData);
    setLoading(false);
    dispatch(updateCardsData({ decks: deckData }));
  }, [item, decks, cards]);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <DisplayCards images={data} group={cardsData.groups} data={cardsData} />
    </div>
  );
};

export default Memorize;
