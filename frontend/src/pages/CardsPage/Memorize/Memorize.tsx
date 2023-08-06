import React, { useEffect, useState } from "react";

import { updateCardsData } from "../../../store/actions/cardsActions";
import { CardsData } from "../../../utils/redux";

import DisplayCards from "./DisplayCards";
import TimerHeader from "../../../components/TimerHeader/TimerHeader";

import { randomDeckOfCards } from "../../../utils/misc";

import { memoryTypes } from "../../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const [margin, setMargin] = useState("-125px");

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

    for (let i = 0; i < decks; i++) {
      deckData[i] = randomDeckOfCards(cards);
    }

    setData(deckData);
    setLoading(false);
    dispatch(updateCardsData({ decks: deckData }));

    let margin: string = "-125px";
    if (cardsData["cardSpacing"] == "regular") margin = "-125px";
    else if (cardsData["cardSpacing"] == "compact") margin = "-175px";
    else if (cardsData["cardSpacing"] == "tight") margin = "-200px";
    else if (cardsData["cardSpacing"] == "expand") margin = "0px";

    setMargin(margin);
  }, []);

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
      <DisplayCards images={data} margin={margin} group={cardsData.groups} />
    </div>
  );
};

export default Memorize;
