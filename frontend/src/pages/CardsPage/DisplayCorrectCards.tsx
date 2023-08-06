import React, { useEffect } from "react";
import {
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
  BsFillDiamondFill,
  BsFillSuitClubFill,
} from "react-icons/bs";
import { renderToString } from "react-dom/server";

import { mainTheme } from "../../config/theme";

import CardGuess from "../../components/CardGuess";

type DisplayCorrectCardsProps = {
  actualDeck: string[];
  memorizedDeck: string[];
  dispatch?: any;
  updateData?: any;
};

const DisplayCorrectCards: React.FC<DisplayCorrectCardsProps> = ({
  actualDeck,
  memorizedDeck,
  dispatch,
  updateData,
}) => {
  console.log(actualDeck, memorizedDeck);

  useEffect(() => {
    if (dispatch && updateData) {
      let correctCards = 0;
      let incorrectCards = 0;

      memorizedDeck.forEach((memorizedCard: string, index: number) => {
        const actualCard = actualDeck[index];
        const correct = memorizedCard === actualCard;

        if (correct) correctCards++;
        else incorrectCards++;
      });

      dispatch(updateData({ correctCards: correctCards }));
      dispatch(updateData({ incorrectCards: incorrectCards }));
    }
  }, [actualDeck, memorizedDeck, dispatch, updateData]);

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

  return (
    <div className="status-cards" style={{ marginTop: "20px" }}>
      {memorizedDeck.map((memorizedCard: string, index: number) => {
        const actualCard = actualDeck[index];
        const correct = memorizedCard === actualCard;
        const key = findKey(actualCard);
        const strKey = renderToString(key);

        return (
          <CardGuess
            key={index}
            number={key}
            numberStyle={{
              left:
                strKey.length === 577 ||
                strKey.length === 452 ||
                strKey.length === 443 ||
                strKey.length === 515
                  ? "6px"
                  : "5px",
            }}
            style={{
              marginLeft: index === 0 ? "0px" : "-125px",
              border: correct
                ? `2px solid ${mainTheme.successColor}`
                : `2px solid ${mainTheme.errorColor}`,
            }}
            width={157}
            height={219}
            color={mainTheme.cardColor.defaultColor}
            hoverColor={mainTheme.cardColor.defaultColor}
            activeColor={mainTheme.cardColor.defaultColor}
            cardImage={memorizedCard ? memorizedCard : ""}
          />
        );
      })}
    </div>
  );
};

export default DisplayCorrectCards;
