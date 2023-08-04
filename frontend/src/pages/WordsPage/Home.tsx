import React from "react";

import { updateWordsData } from "../../store/actions/wordsActions";
import { WordsData } from "../../utils/redux";

import Button from "../../components/Button";
import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Words from "../../images/headers/words.png";

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  const { wordsData, dispatch } = WordsData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      dispatch(updateWordsData({ [name]: integerValue }));
    }
  };

  return (
    <>
      <Header
        title="Words"
        color={memoryTypes.words.color}
        image={Words}
        link="/words/stats"
      />
      <div className="config-table">
        <table className="config">
          <tbody>
            <tr>
              <td className="left">Number of Words to Memorize:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="numberOfWords"
                  value={wordsData.numberOfWords}
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
                  value={wordsData.groups}
                  onChange={handleInputChange}
                />
              </td>
              <td className="note">Specify the card groupings (1-10).</td>
            </tr>
            <tr>
              <td className="left">Maximum Memorization Time:</td>
              <td>
                <input
                  className="config-input"
                  type="number"
                  min="1"
                  name="maxMemorizationTime"
                  value={wordsData.maxMemorizationTime}
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
                  value={wordsData.maxRecallTime}
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
                  value={wordsData.preparationTime}
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
                  value={wordsData.preparationBeforeRecallTime}
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
