import React from "react";

import { FormatSeconds } from "../../utils/misc";
import { ImagesData } from "../../utils/redux";

import TimerHeader from "../../components/TimerHeader/TimerHeader";

import { memoryTypes } from "../../config/theme";

type StatusProps = {
  onClick: () => void;
};

const Status: React.FC<StatusProps> = ({ onClick }) => {
  const { imagesData } = ImagesData();
  const seconds = FormatSeconds(imagesData.finishedMemorizationTime)

  return (
    <div>
      <TimerHeader
        color={memoryTypes.images.color}
        title={`Images (${seconds})`}
        finish={onClick}
        text="Status"
        button="continue"
      />
    </div>
  );
};

export default Status;
