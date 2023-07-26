import React from "react";

import { updateNumbersData } from "../../store/actions/numbersActions";
import { NumbersData } from "../../utils/redux";

import Button from "../../components/Button";
import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Numbers from "../../images/headers/numbers.png";

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  const { numbersData, dispatch } = NumbersData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      dispatch(updateNumbersData({ [name]: integerValue }));
    }
  };

  return (
    <>
      <Header
        title="Numbers"
        color={memoryTypes.numbers.color}
        image={Numbers}
        link="/numbers/stats"
      />
      <div className="config-table">
        <table className="config">
          <tbody>
            <tr>
              <td className="left">Number of Digits to Memorize:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="numberOfNumbers"
                  value={numbersData.numberOfNumbers}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note"></td>
            </tr>
            <tr>
              <td className="left">Groups:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  max="9"
                  name="groups"
                  value={numbersData.groups}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Specify the digit groupings (1-10).</td>
            </tr>
            <tr>
              <td className="left">Maximum Memorization Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxMemorizationTime"
                  value={numbersData.maxMemorizationTime}
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
                  value={numbersData.maxRecallTime}
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
                  value={numbersData.preparationTime}
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
                  value={numbersData.preparationBeforeRecallTime}
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
