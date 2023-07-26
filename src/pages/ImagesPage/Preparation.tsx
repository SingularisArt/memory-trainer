import React from "react";

import { ImagesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type PreparationProps = {
  onClick: () => void;
};

const Preparation: React.FC<PreparationProps> = ({ onClick }) => {
  const { imagesData } = ImagesData();

  return (
    <div>
      <TimerHeader
        color={memoryTypes.images.color}
        title="Images"
        time={imagesData.preparationTime}
        finish={onClick}
        text="Memorization starts in"
      />
    </div>
  );
};

export default Preparation;
