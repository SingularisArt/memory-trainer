import React, {  useState } from "react";
import "./DisplayCards.css";

type DisplayCardsProps = {
  images: string[];
  group: number;
};

const DisplayCards: React.FC<DisplayCardsProps> = ({ images, group }) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const startIndex = currentGroup * group;

  const firstGroup = images.slice(0, startIndex);
  const secondGroup = images.slice(startIndex, startIndex + group);
  const thirdGroup = images.slice(startIndex + group);

  return (
    <div>
      <div className="main-cards">
        {secondGroup.map((name, index) => {
          return (
            <img
              key={index}
              src={name}
              style={{
                marginLeft: "-150px",
              }}
            />
          );
        })}
      </div>

      <div>
        <button
          onClick={() =>
            setCurrentGroup((prevGroup) =>
              thirdGroup.length !== 0 ? prevGroup + 1 : prevGroup
            )
          }
        >
          Shift Group Forward
        </button>
        <button
          onClick={() =>
            setCurrentGroup((prevGroup) =>
              firstGroup.length !== 0 ? prevGroup - 1 : prevGroup
            )
          }
        >
          Shift Group Backward
        </button>
      </div>

      <div className="grid-container">
        <div className="first-group">
          {firstGroup.map((name, index) => {
            return (
              <img
                key={index}
                src={name}
                width={157}
                height={219}
                style={{
                  position: "absolute",
                  left: `${10 * index}px`,
                }}
              />
            );
          })}
        </div>

        <div className="third-group">
          {thirdGroup.map((name, index) => {
            return (
              <img
                key={index}
                src={name}
                width={157}
                height={219}
                style={{
                  position: "absolute",
                  left: `${10 * index}px`,
                  marginLeft: "500px",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
