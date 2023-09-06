import React from "react";

import { updateWordsData } from "../../store/actions/wordsActions";
import { WordsData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { wordsData, dispatch } = WordsData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.words.color}
        title="Words"
        time={wordsData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateWordsData}
      />
    </div>
  );
};

export default Memorize;
