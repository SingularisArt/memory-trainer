import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "../../../components/Button";

import "./DisplayCards.css";

type DisplayCardsProps = {
  images: {
    [deckId: number]: string[];
  };
  group: number;
  data: any;
};

const DisplayCards: React.FC<DisplayCardsProps> = ({ images, group, data }) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const startIndex = currentGroup * group;
  const newImages = images[1];

  const firstGroup = newImages.slice(0, startIndex);
  const secondGroup = newImages.slice(startIndex, startIndex + group);
  const thirdGroup = newImages.slice(startIndex + group);

  let margin: string;
  if (data["cardSpacing"] == "regular") margin = "-125px";
  else margin = "-175px";

  return (
    <div>
      <div className="first-section">
        <div className="button">
          <Button
            icon={<FaArrowLeft />}
            className="arrow"
            onClick={() =>
              setCurrentGroup((prevGroup) =>
                firstGroup.length !== 0 ? prevGroup - 1 : prevGroup
              )
            }
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
            onClick={() =>
              setCurrentGroup((prevGroup) =>
                thirdGroup.length !== 0 ? prevGroup + 1 : prevGroup
              )
            }
          />
        </div>
      </div>

      <div className="second-section">
        <div className="first-cards" style={{
          marginLeft: firstGroup.length !== 0 ? "0px" : "110px",
        }}>
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

      <div className="third-section"></div>
    </div>
  );
};

export default DisplayCards;
