import React from "react";

import { updateImagesData } from "../../store/actions/imagesActions";
import { ImagesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type MemorizeProps = {
  onClick: () => void;
};

const Memorize: React.FC<MemorizeProps> = ({ onClick }) => {
  const { imagesData, dispatch } = ImagesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.images.color}
        title="Images"
        time={imagesData.maxMemorizationTime}
        finish={onClick}
        text="Memorization ends in"
        button="finished"
        updateFinishedTime={true}
        dispatch={dispatch}
        updateData={updateImagesData}
      />
    </div>
  );
};

export default Memorize;
