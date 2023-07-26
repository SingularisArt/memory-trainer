import React from "react";

import { updateNamesData } from "../../store/actions/namesActions";
import { NamesData } from "../../utils/redux";

import Button from "../../components/Button";
import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Names from "../../images/headers/names.png";

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  const { namesData, dispatch } = NamesData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      dispatch(updateNamesData({ [name]: integerValue }));
    }
  };

  return (
    <>
      <Header
        title="Names"
        color={memoryTypes.names.color}
        image={Names}
        link="/names/stats"
      />
      <div className="config-table">
        <table className="config">
          <tbody>
            <tr>
              <td className="left">Number of Names to Memorize:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="numberOfNames"
                  value={namesData.numberOfNames}
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
                  value={namesData.maxMemorizationTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
            <tr>
              <td>Maximum Recall Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxRecallTime"
                  value={namesData.maxRecallTime}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Seconds.</td>
            </tr>
            <tr>
              <td>Preparation Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="preparationTime"
                  value={namesData.preparationTime}
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
                  value={namesData.preparationBeforeRecallTime}
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
