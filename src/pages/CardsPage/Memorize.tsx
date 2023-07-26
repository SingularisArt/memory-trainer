import React from "react";

import { updateCardsData } from "../../store/actions/cardsActions";
import { CardsData } from "../../utils/redux";

import DisplayCards from "../../components/DisplayCards/DisplayCards";
import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const lists=[
    "https://deckofcardsapi.com/static/img/AH.png",
    "https://deckofcardsapi.com/static/img/2H.png",
    "https://deckofcardsapi.com/static/img/3H.png",
    "https://deckofcardsapi.com/static/img/4H.png",
    "https://deckofcardsapi.com/static/img/5H.png",
    "https://deckofcardsapi.com/static/img/6H.png",
    "https://deckofcardsapi.com/static/img/7H.png",
    "https://deckofcardsapi.com/static/img/8H.png",
    "https://deckofcardsapi.com/static/img/9H.png",
    "https://deckofcardsapi.com/static/img/0H.png",
    "https://deckofcardsapi.com/static/img/JH.png",
    "https://deckofcardsapi.com/static/img/QH.png",
    "https://deckofcardsapi.com/static/img/KH.png",

    "https://deckofcardsapi.com/static/img/AS.png",
    "https://deckofcardsapi.com/static/img/2S.png",
    "https://deckofcardsapi.com/static/img/3S.png",
    "https://deckofcardsapi.com/static/img/4S.png",
    "https://deckofcardsapi.com/static/img/5S.png",
    "https://deckofcardsapi.com/static/img/6S.png",
    "https://deckofcardsapi.com/static/img/7S.png",
    "https://deckofcardsapi.com/static/img/8S.png",
    "https://deckofcardsapi.com/static/img/9S.png",
    "https://deckofcardsapi.com/static/img/0S.png",
    "https://deckofcardsapi.com/static/img/JS.png",
    "https://deckofcardsapi.com/static/img/QS.png",
    "https://deckofcardsapi.com/static/img/KS.png",

    "https://deckofcardsapi.com/static/img/AD.png",
    "https://deckofcardsapi.com/static/img/2D.png",
    "https://deckofcardsapi.com/static/img/3D.png",
    "https://deckofcardsapi.com/static/img/4D.png",
    "https://deckofcardsapi.com/static/img/5D.png",
    "https://deckofcardsapi.com/static/img/6D.png",
    "https://deckofcardsapi.com/static/img/7D.png",
    "https://deckofcardsapi.com/static/img/8D.png",
    "https://deckofcardsapi.com/static/img/9D.png",
    "https://deckofcardsapi.com/static/img/0D.png",
    "https://deckofcardsapi.com/static/img/JD.png",
    "https://deckofcardsapi.com/static/img/QD.png",
    "https://deckofcardsapi.com/static/img/KD.png",

    "https://deckofcardsapi.com/static/img/AC.png",
    "https://deckofcardsapi.com/static/img/2C.png",
    "https://deckofcardsapi.com/static/img/3C.png",
    "https://deckofcardsapi.com/static/img/4C.png",
    "https://deckofcardsapi.com/static/img/5C.png",
    "https://deckofcardsapi.com/static/img/6C.png",
    "https://deckofcardsapi.com/static/img/7C.png",
    "https://deckofcardsapi.com/static/img/8C.png",
    "https://deckofcardsapi.com/static/img/9C.png",
    "https://deckofcardsapi.com/static/img/0C.png",
    "https://deckofcardsapi.com/static/img/JC.png",
    "https://deckofcardsapi.com/static/img/QC.png",
    "https://deckofcardsapi.com/static/img/KC.png",
  ]

  return (
    <DisplayCards images={lists} group={3} />
  );
};

export default Memorize;

// <TimerHeader
//   color={memoryTypes.cards.color}
//   title="Cards"
//   time={cardsData.maxMemorizationTime}
//   finish={onClick}
//   text="Memorization ends in"
//   button="finished"
//   updateFinishedTime={true}
//   dispatch={dispatch}
//   updateData={updateCardsData}
// />
