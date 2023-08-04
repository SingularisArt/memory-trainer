import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { ImagesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type RecallBreakProps = {
  onClick: () => void;
};

const Recall: React.FC<RecallBreakProps> = ({ onClick }) => {
  const { imagesData } = ImagesData();
  const seconds = FormatSeconds(imagesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.images.color}
        title={`Images (${seconds})`}
        time={imagesData.maxRecallTime}
        finish={onClick}
        text="Recall ends in"
        button="finished"
      />
    </div>
  );
};

export default Recall;
