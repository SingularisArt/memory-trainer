import React from "react";
import {
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
  BsFillDiamondFill,
  BsFillSuitClubFill,
} from "react-icons/bs";
import { renderToString } from "react-dom/server";

import { FormatSeconds } from "../../../utils/misc";
import { CardsData } from "../../../utils/redux";

import { mainTheme } from "../../../config/theme";

import CardGuess from "../../../components/CardGuess";
import TimerHeader from "../../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../../config/theme";

import "./Score.css";

type ScoreProps = {
  onClick: () => void;
};

const Score: React.FC<ScoreProps> = ({ onClick }) => {
  const { cardsData } = CardsData();
  const seconds = FormatSeconds(cardsData.finishedMemorizationTime);

  const findKey = (card: string): JSX.Element => {
    const lastPart = card.slice(card.length - 6);
    const key = lastPart.slice(0, 2);

    let rank = key.slice(0, 1);
    const suit = key.slice(1, 2);

    if (rank === "0") rank = "10";

    const commonStyle = {
      fontSize: "17px",
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "arial sans-serif",
    };

    if (suit === "H")
      return (
        <div style={{ ...commonStyle, color: "red" }}>
          {rank}
          <BsFillSuitHeartFill />
        </div>
      );
    else if (suit === "S")
      return (
        <div style={{ ...commonStyle, color: "black" }}>
          {rank}
          <BsFillSuitSpadeFill />
        </div>
      );
    else if (suit === "D")
      return (
        <div style={{ ...commonStyle, color: "red" }}>
          {rank}
          <BsFillDiamondFill />
        </div>
      );
    else if (suit === "C")
      return (
        <div style={{ ...commonStyle, color: "black" }}>
          {rank}
          <BsFillSuitClubFill />
        </div>
      );

    return <div style={{ fontSize: "20px" }}>{rank}</div>;
  };

  const deck = cardsData.decks[1];
  const guessedCards = cardsData.guessedDecks[1];

  return (
    <div>
      <TimerHeader
        color={memoryTypes.cards.color}
        title={`Cards (${seconds})`}
        finish={onClick}
        text="Score"
        button="continue"
      />

      <div className="status-cards" style={{ marginTop: "20px" }}>
        {guessedCards.map((guessedCard: string, index: number) => {
          const actualCard = deck[index - 1];
          const correct = guessedCard === actualCard;
          const key = findKey(actualCard);
          const strKey = renderToString(key)
          console.log(strKey.length)

          return (
            <CardGuess
              key={index}
              number={key}
              numberStyle={{
                left: strKey.length === 577 || strKey.length === 452 || strKey.length === 443 || strKey.length === 515 ? "6px" : "5px",
              }}
              style={{
                marginLeft: index === 1 ? "0px" : "-125px",
                border: correct ? "2px solid green" : "2px solid red",
              }}
              width={157}
              height={219}
              color={mainTheme.cardColor.defaultColor}
              hoverColor={mainTheme.cardColor.defaultColor}
              activeColor={mainTheme.cardColor.defaultColor}
              cardImage={guessedCard ? guessedCard : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Score;
