import React, { useState, useCallback, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "../../../components/Button";

import "./DisplayCards.css";
import "../GlobalStyles.css";

type DisplayCardsProps = {
  data: {
    [deckId: number]: string[];
  };
  group: number;
  margin: string;
};

const DisplayCards: React.FC<DisplayCardsProps> = ({ data, group, margin }) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentDeck, setCurrentDeck] = useState(0);

  const startIndex = currentGroup * group;
  const currentlySelectedData = data[currentDeck];

  const firstGroup = currentlySelectedData.slice(0, startIndex);
  const secondGroup = currentlySelectedData.slice(
    startIndex,
    startIndex + group,
  );
  const thirdGroup = currentlySelectedData.slice(startIndex + group);

  const moveLeft = () => {
    setCurrentGroup((prevGroup) =>
      firstGroup.length !== 0 ? prevGroup - 1 : prevGroup,
    );
  };
  const moveRight = () => {
    setCurrentGroup((prevGroup) =>
      thirdGroup.length !== 0 ? prevGroup + 1 : prevGroup,
    );
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        requestAnimationFrame(() => moveLeft());
      }
      if (event.key === "ArrowRight") {
        requestAnimationFrame(() => moveRight());
      }

      if (event.key === "ArrowUp") {
        requestAnimationFrame(() => setCurrentGroup(0));
      }
      if (event.key === "ArrowDown") {
        requestAnimationFrame(() =>
          setCurrentGroup(currentlySelectedData.length / group - 1),
        );
      }
    },
    [currentGroup],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <div className="container">
        <div className="change-deck-of-cards">
          {Object.keys(data).length > 1 && (
            <>
              {Object.keys(data).map((_key, index) => (
                <Button
                  key={index}
                  text={(index + 1).toString()}
                  className={`change-deck-button ${
                    currentDeck === index ? "change-deck-button-enabled" : ""
                  }`}
                  onClick={() => {
                    setCurrentDeck(index);
                  }}
                />
              ))}
            </>
          )}
        </div>
        <div className="second-section">
          <div className="button">
            <Button
              icon={<FaArrowLeft />}
              className="arrow"
              onClick={() => moveLeft()}
            />
          </div>

          <div className="current-cards">
            {secondGroup.map((name, index) => {
              return (
                <img
                  key={index}
                  src={name}
                  style={{
                    marginLeft: index == 0 ? "0px" : margin,
                  }}
                />
              );
            })}
          </div>

          <div className="button">
            <Button
              icon={<FaArrowRight />}
              className="arrow"
              onClick={() => moveRight()}
            />
          </div>
        </div>

        <div className="third-section">
          <div
            className="left-cards"
            style={{
              marginLeft: firstGroup.length !== 0 ? "0px" : "110px",
            }}
          >
            {firstGroup.map((name, index) => {
              return (
                <img
                  key={index}
                  src={name}
                  width={157}
                  height={219}
                  style={{
                    marginLeft: index == 0 ? "0px" : "-145px",
                  }}
                />
              );
            })}
          </div>

          {thirdGroup.length !== 0 && (
            <div className="right-cards">
              {thirdGroup.map((name, index) => {
                return (
                  <img
                    key={index}
                    src={name}
                    width={157}
                    height={219}
                    style={{
                      marginLeft: index == 0 ? "0px" : "-145px",
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
