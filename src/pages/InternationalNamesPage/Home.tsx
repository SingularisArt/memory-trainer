import React from "react";

import { updateInternationalNamesData } from "../../store/actions/internationalNamesActions";
import { InternationalNamesData } from "../../utils/redux";

import Button from "../../components/Button";
import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import InternationalNames from "../../images/headers/international_names.png";

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  const { internationalNamesData, dispatch } = InternationalNamesData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      dispatch(updateInternationalNamesData({ [name]: integerValue }));
    }
  };

  return (
    <>
      <Header
        title="International Names"
        color={memoryTypes.internationalNames.color}
        image={InternationalNames}
        link="/internationalNames/stats"
      />
      <div className="config-table">
        <table className="config">
          <tbody>
            <tr>
              <td className="left">Number of International Names to Memorize:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="numberOfInternationalNames"
                  value={internationalNamesData.numberOfInternationalNames}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note"></td>
            </tr>
            <tr>
              <td className="left">Maximum Memorization Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxMemorizationTime"
                  value={internationalNamesData.maxMemorizationTime}
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
                  value={internationalNamesData.maxRecallTime}
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
                  value={internationalNamesData.preparationTime}
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
                  value={internationalNamesData.preparationBeforeRecallTime}
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
