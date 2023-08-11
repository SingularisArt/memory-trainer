import axios from "axios";
import React, { useEffect, useState } from "react";

import { updateCardsData } from "../../store/actions/cardsActions";
import { FormatSeconds } from "../../utils/misc";
import { CardsData } from "../../utils/redux";

import Button from "../../components/Button";
import TimerHeader from "../../components/TimerHeader/TimerHeader";
import DisplayCorrectCards from "./DisplayCorrectCards";

import config from "../../config/config";
import { memoryTypes } from "../../config/theme";

import "./GlobalStyles.css";

type ScoreProps = {
  onClick: () => void;
};

const Score: React.FC<ScoreProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const [currentDeck, setCurrentDeck] = useState<number>(0);
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime);

  const numberOfDecks =
    cardsData.item === "Decks" ? cardsData.numberOfDecks : 0;

  const actualDeck = cardsData.decks;
  const memorizedDeck = cardsData.memorizedDecks;

  const [outData] = useState({
    username: "SingularisArt",
    date: "",
    finishedTime: cardsData.finishedMemorizationTime,
    score: 1,
    item: cardsData.item,
    numberOfItems:
      cardsData.item == "Cards"
        ? cardsData.numberOfCards
        : cardsData.numberOfDecks,
    actualCardData: JSON.stringify(cardsData.decks),
    memorizedCardData: JSON.stringify(cardsData.memorizedDecks),
    numberOfCorrectlyMemorizedItems: 52,
    numberOfIncorrectlyMemorizedItems: 0,
  });

  useEffect(() => {
    let correctCards = 0;
    let incorrectCards = 0;

    Object.keys(memorizedDeck).forEach((key) => {
      memorizedDeck[key].forEach((memorizedCard: string, index: number) => {
        const actualCard = actualDeck[key][index];
        const correct = memorizedCard === actualCard;

        if (correct) correctCards++;
        else incorrectCards++;
      });
    });

    dispatch(updateCardsData({ correctCards: correctCards }));
    dispatch(updateCardsData({ incorrectCards: incorrectCards }));
  }, [actualDeck, memorizedDeck]);

  const submitData = async () => {
    const dateObj = new Date().toLocaleString("en-US", {
      timeZone: config.timeZone,
    });

    const formattedDate = new Date(dateObj);
    const year = formattedDate.getFullYear();
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
    const day = formattedDate.getDate().toString().padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    const hour = formattedDate.getHours();
    const minutes = formattedDate.getMinutes();
    const seconds = formattedDate.getSeconds();
    const time = `${hour}:${minutes}:${seconds}`;

    const finalDate = `${date} ${time}`;
    const dataToSend = {
      ...outData,
      date: finalDate,
      numberOfCorrectlyMemorizedItems: cardsData.correctCards,
      numberOfIncorrectlyMemorizedItems: cardsData.incorrectCards,
      score:
        cardsData.correctCards /
        (cardsData.correctCards + cardsData.incorrectCards),
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/cards",
        dataToSend,
      );
      console.log(response.data);
      onClick();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        finish={submitData}
        text="Score"
        button="continue"
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

      <DisplayCorrectCards
        actualDeck={actualDeck[currentDeck]}
        memorizedDeck={memorizedDeck[currentDeck]}
        dispatch={dispatch}
        updateData={updateCardsData}
      />
    </div>
  );
};

export default Score;
