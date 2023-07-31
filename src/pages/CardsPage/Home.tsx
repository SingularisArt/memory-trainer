import React, { useState, useEffect } from "react";

import { updateCardsData } from "../../store/actions/cardsActions";
import { CardsData } from "../../utils/redux";

import Button from "../../components/Button";
import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Cards from "../../images/headers/cards.png";

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  const { cardsData, dispatch } = CardsData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      dispatch(updateCardsData({ [name]: integerValue }));
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    dispatch(updateCardsData({ [name]: value }));
  };

  return (
    <>
      <Header
        title="Cards"
        color={memoryTypes.cards.color}
        image={Cards}
        link="/cards/stats"
      />
      <div className="config-table">
        <table className="config">
          <tbody>
            <tr>
              <td className="left">What to Memorize:</td>
              <td>
                <select
                  className="item"
                  name="item"
                  value={cardsData.item}
                  onChange={handleSelectChange}
                >
                  <option value="Cards">Cards</option>
                  <option value="Decks">Decks</option>
                </select>
              </td>
              <td className="note"></td>
            </tr>
            {cardsData.item === "Cards" && (
              <tr>
                <td className="left">Number of Cards to Memorize:</td>
                <td>
                  <input
                    className="config-input"
                    type="number"
                    min="1"
                    max="52"
                    name="numberOfCards"
                    value={cardsData.numberOfCards}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="note">Specify the number of cards you want to memorize (1-52).</td>
              </tr>
            )}
            {cardsData.item === "Decks" && (
              <tr>
                <td className="left">Number of Decks to Memorize:</td>
                <td>
                  <input
                    className="config-input"
                    type="number"
                    min="1"
                    max="20"
                    name="numberOfDecks"
                    value={cardsData.numberOfDecks}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="note">Specify the number of decks you want to memorize.</td>
              </tr>
            )}
            <tr>
              <td className="left">Groups:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  max="10"
                  name="groups"
                  value={cardsData.groups}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Specify the card groupings (1-10).</td>
            </tr>
            <tr>
              <td className="left">Card Spacing:</td>
              <td>
                <select
                  className="card-spacing"
                  name="cardSpacing"
                  value={cardsData.cardSpacing}
                  onChange={handleSelectChange}
                >
                  <option value="regular">Regular</option>
                  <option value="compact">Compact</option>
                  <option value="tight">Tight</option>
                  <option value="expand">Expand</option>
                </select>
              </td>
              <td className="note">Select the distance between cards.</td>
            </tr>
            <tr>
              <td className="left">Maximum Memorization Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxMemorizationTime"
                  value={cardsData.maxMemorizationTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
            <tr>
              <td className="left">Maximum Recall Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxRecallTime"
                  value={cardsData.maxRecallTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
            <tr>
              <td className="left">Preparation Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="preparationTime"
                  value={cardsData.preparationTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
            <tr>
              <td className="left">Preparation Before Recall Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="preparationBeforeRecallTime"
                  value={cardsData.preparationBeforeRecallTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
          </tbody>
        </table>

        <div className="start-btn-div">
          <Button text="Start" className="start-btn" onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default Home;
