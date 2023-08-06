import React, { useState } from "react";
import axios from "axios";

import { FormatSeconds } from "../../../utils/misc";
import { CardsData } from "../../../utils/redux";
import { updateCardsData } from "../../../store/actions/cardsActions";

import DisplayCorrectCards from "../DisplayCorrectCards";
import TimerHeader from "../../../components/TimerHeader/TimerHeader";

import config from "../../../config/config";
import { memoryTypes } from "../../../config/theme";

import "./Score.css";

type ScoreProps = {
  onClick: () => void;
};

const Score: React.FC<ScoreProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();
  const [currentDeck, _setCurrentDeck] = useState<number>(0);
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime);

  const actualDeck = cardsData.decks[currentDeck];
  const memorizedDeck = cardsData.memorizedDecks[currentDeck];

  const [outData] = useState({
    username: "SingularisArt",
    date: "",
    finished_time: cardsData.finishedMemorizationTime,
    score: 1,
    item: cardsData.item,
    number_of_items:
      cardsData.item == "Cards"
        ? cardsData.numberOfCards
        : cardsData.numberOfDecks,
    actual_card_data: JSON.stringify(cardsData.decks),
    memorized_card_data: JSON.stringify(cardsData.memorizedDecks),
    number_of_correctly_memorized_items: 52,
    number_of_incorrectly_memorized_items: 0,
  });

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
      number_of_correctly_memorized_items: cardsData.correctCards,
      number_of_incorrectly_memorized_items: cardsData.incorrectCards,
      score: cardsData.correctCards / (outData.number_of_items),
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/cards",
        dataToSend,
      );
      onClick();
      console.log(response.data);
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

      <DisplayCorrectCards
        actualDeck={actualDeck}
        memorizedDeck={memorizedDeck}
        dispatch={dispatch}
        updateData={updateCardsData}
      />
    </div>
  );
};

export default Score;
