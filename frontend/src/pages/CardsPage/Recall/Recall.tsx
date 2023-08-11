import React, { useCallback, useEffect, useState } from "react";

import { updateCardsData } from "../../../store/actions/cardsActions";
import { FormatSeconds } from "../../../utils/misc";
import { CardsData } from "../../../utils/redux";

import { mainTheme } from "../../../config/theme";

import Button from "../../../components/Button";
import CardGuess from "../../../components/CardGuess";
import TimerHeader from "../../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../../config/theme";

import "./Recall.css";
import "../GlobalStyles.css";

type RecallProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();

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

  const numberOfCards =
    cardsData.item === "Cards" ? cardsData.numberOfCards : 52;
  const numberOfDecks =
    cardsData.item === "Decks" ? cardsData.numberOfDecks : 0;

  const [activeCard, setActiveCard] = useState<number>(0);
  const [currentDeck, setCurrentDeck] = useState<number>(0);

  const [memorizedDecks, setMemorizedDecks] = useState<{ [deckId: number]: string[] }>(() => {
    const initialDecks: { [deckId: number]: string[] } = {};

    if (numberOfDecks === 0) initialDecks[0] = Array(numberOfCards).fill("");
    else {
      for (let i = 0; i < numberOfDecks; i++) {
        initialDecks[i] = Array(numberOfCards).fill("");
      }
    }

    return initialDecks;
  });

  const [imageVisibility, setImageVisibility] = useState<{ [deckId: number]: boolean[] }>(() => {
    const initialDecks: { [deckId: number]: boolean[] } = {};

    if (numberOfDecks === 0) initialDecks[0] = Array(numberOfCards).fill(true);
    else {
      for (let i = 0; i < numberOfDecks; i++) {
        initialDecks[i] = Array(numberOfCards).fill(true);
      }
    }

    return initialDecks;
  });

  const currentlySelectedData = cardsData.decks[currentDeck];
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime);

  const handleOnClick = () => {
    dispatch(updateCardsData({ memorizedDecks: memorizedDecks }));
    onClick();
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        requestAnimationFrame(() =>
          setActiveCard((prev) => {
            if (prev > 0) {
              if (prev === 0) return 0;
              return prev - 1;
            }
          }),
        );
      }
      if (event.key === "ArrowRight") {
        requestAnimationFrame(() =>
          setActiveCard((prev) => prev >= 0 && prev + 1),
        );
      }

      if (event.key === "ArrowUp") {
        requestAnimationFrame(() => setActiveCard(0));
      }
      if (event.key === "ArrowDown") {
        requestAnimationFrame(() =>
          setActiveCard(currentlySelectedData.length - 1),
        );
      }
    },
    [activeCard],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleCardClick = (cardNumber: number) => {
    if (activeCard === cardNumber) {
    } else {
      setActiveCard(cardNumber);
    }
  };

  const toggleImageVisibility = (cardNumber: number, isVisible: boolean) => {
    setImageVisibility((prevVisibility) => ({
      ...prevVisibility,
      [currentDeck]: prevVisibility[currentDeck].map((value, index) =>
        index === cardNumber ? isVisible : value,
      ),
    }));
  };

  const handleImageClick = (cardNumber: number) => {
    const card = document.querySelector(
      `.card-${activeCard}`,
    ) as HTMLImageElement;

    const image = document.querySelector(
      `.image-${cardNumber}`,
    ) as HTMLImageElement;

    if (image && card) {
      let background = card.style.backgroundImage.slice(5, -2);
      if (background) {
        const index = deck.indexOf(background);
        toggleImageVisibility(index, true);
      }
      background = deck[cardNumber];

      const newMemorizedDecks = { ...memorizedDecks };
      newMemorizedDecks[currentDeck][activeCard] = background;
      setMemorizedDecks(newMemorizedDecks);

      toggleImageVisibility(cardNumber, false);

      card.style.backgroundImage = `url(${deck[cardNumber]})`;
      card.style.backgroundSize = "contain";
      card.style.border = "";

      setActiveCard((prev) => prev + 1);
    }
  };

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        time={cardsData.maxRecallTime}
        finish={() => handleOnClick()}
        // finish={() => {}}
        text="Recall ends in"
        button="finished"
      />

      <div className="change-deck-of-cards">
        {numberOfDecks > 1
          ? Array.from({ length: numberOfDecks }, (_, index) => (
              <Button
                key={index}
                text={(index + 1).toString()}
                  className={`change-deck-button ${
                    currentDeck === index ? "change-deck-button-enabled" : ""
                  }`}
                onClick={() => setCurrentDeck(index)}
              />
            ))
          : null}
      </div>

      <div className="input-section">
        {Array.from({ length: numberOfCards }, (_, index) => (
          <CardGuess
            key={index}
            className={`card-${index}`}
            number={index + 1}
            numberStyle={{
              left: "15px",
            }}
            style={{
              marginLeft: index === 0 ? "0px" : "-125px",
            }}
            width={157}
            height={219}
            color={mainTheme.cardColor.defaultColor}
            hoverColor={mainTheme.cardColor.hoverCardColor}
            activeColor={mainTheme.cardColor.activeCardColor}
            onClick={() => handleCardClick(index)}
            isActive={activeCard === index}
            cardImage={memorizedDecks[currentDeck][index]}
          />
        ))}
      </div>
      <div className="deck-of-cards">
        {deck.map((card, index) => {
          if (!imageVisibility[currentDeck][index]) return null;

          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Recall;
