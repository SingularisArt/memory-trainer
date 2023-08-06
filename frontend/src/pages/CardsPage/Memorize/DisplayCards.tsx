import React from "react";
import { useState, useCallback, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "../../../components/Button";

import "./DisplayCards.css";

type DisplayCardsProps = {
  images: {
    [deckId: number]: string[];
  };
  group: number;
  margin: string;
};

const DisplayCards: React.FC<DisplayCardsProps> = ({
  images,
  group,
  margin,
}) => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const startIndex = currentGroup * group;
  const newImages = images[0];

  const firstGroup = newImages.slice(0, startIndex);
  const secondGroup = newImages.slice(startIndex, startIndex + group);
  const thirdGroup = newImages.slice(startIndex + group);

  const moveLeft = () => {
    setCurrentGroup((prevGroup) =>
      firstGroup.length !== 0 ? prevGroup - 1 : prevGroup
    );
  };
  const moveRight = () => {
    setCurrentGroup((prevGroup) =>
      thirdGroup.length !== 0 ? prevGroup + 1 : prevGroup
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
        requestAnimationFrame(() =>
          setCurrentGroup(newImages.length / group - 1)
        );
      }
      if (event.key === "ArrowDown") {
        requestAnimationFrame(() => setCurrentGroup(0));
      }
    },
    [currentGroup]
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
        <div className="left"></div>
        <div className="right">
          <div className="first-section">
            <div className="button">
              <Button
                icon={<FaArrowLeft />}
                className="arrow"
                onClick={() => moveLeft()}
              />
            </div>

            <div className="main-cards">
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

          <div className="second-section">
            <div
              className="first-cards"
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
              <div className="third-cards">
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
    </div>
  );
};

export default DisplayCards;
