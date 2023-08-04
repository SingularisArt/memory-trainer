import React, { useState } from "react";

import { CardsData } from "../../../utils/redux";
import { FormatSeconds } from "../../../utils/misc";
import { updateCardsData } from "../../../store/actions/cardsActions";

import { mainTheme } from "../../../config/theme";

import CardGuess from "../../../components/CardGuess";
import TimerHeader from "../../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../../config/theme";

import "./Recall.css";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime);

  const newOnClick = () => {
    let inputDeck: { [id: number]: string[] } = {};
    let numberOfDecks: number = 1;
    let numberOfCards: number = 52;

    if (cardsData.item == "Cards") numberOfDecks = 1
    else if (cardsData.item == "Decks") numberOfDecks = cardsData.numberOfDecks

    if (cardsData.type == "Cards") numberOfCards = cardsData.numberOfCards
    else if (cardsData.type == "Decks") numberOfCards = 52

    for (let deckIndex = 1; deckIndex <= numberOfDecks; deckIndex++) {
      for (let cardIndex = 1; cardIndex <= numberOfCards; cardIndex++) {
        const card = document.querySelector(
          `.card-${cardIndex}`
        ) as HTMLImageElement;

        try {
          const background = card.style.backgroundImage.slice(5, -2);
          inputDeck[deckIndex][cardIndex] = background;
        } catch (error) {
          inputDeck[deckIndex] = [];

          const background = card.style.backgroundImage.slice(5, -2);
          inputDeck[deckIndex][cardIndex] = background;
        }
      }
    }

    dispatch(updateCardsData({ guessedDecks: inputDeck }));
    onClick();
  };

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [deck] = useState<string[]>([
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
  ]);

  const handleCardClick = (cardNumber: number) => {
    if (activeCard === cardNumber) {
      setActiveCard(null);
    } else {
      setActiveCard(cardNumber);
    }
  };

  const toggleImageVisibility = (cardNumber: number, isVisible: boolean) => {
    const image = document.querySelector(
      `.image-${cardNumber}`
    ) as HTMLImageElement;

    if (image) {
      image.style.display = isVisible ? "block" : "none";
    }
  };

  const handleImageClick = (cardNumber: number) => {
    const card = document.querySelector(
      `.card-${activeCard}`
    ) as HTMLImageElement;

    if (!card) return;

    const image = document.querySelector(
      `.image-${cardNumber}`
    ) as HTMLImageElement;

    if (image && card) {
      const background = card.style.backgroundImage.slice(5, -2);
      if (background) {
        const index = deck.indexOf(background);
        toggleImageVisibility(index, true);
      }

      toggleImageVisibility(cardNumber, false);

      card.style.backgroundImage = `url(${deck[cardNumber]})`;
      card.style.backgroundSize = "contain";
      card.style.border = "";
    }
  };

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        time={cardsData.maxRecallTime}
        finish={newOnClick}
        text="Recall ends in"
        button="finished"
      />

      <div className="input-section">
        {Array.from({ length: cardsData.numberOfCards }, (_, index) => (
          <CardGuess
            key={index}
            className={`card-${index + 1}`}
            number={index + 1}
            style={{
              marginLeft: index === 0 ? "0px" : "-125px",
            }}
            width={157}
            height={219}
            color={mainTheme.cardColor.defaultColor}
            hoverColor={mainTheme.cardColor.hoverCardColor}
            activeColor={mainTheme.cardColor.activeCardColor}
            onClick={() => handleCardClick(index + 1)}
            isActive={activeCard === index + 1}
          />
        ))}
      </div>
      <div className="deck-of-cards">
        {deck.map((card, index) => (
          <img
            key={index}
            className={`image image-${index}`}
            style={{
              marginLeft: index === 0 ? "0px" : "-140px",
            }}
            width={157}
            height={219}
            src={card}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Recall;
