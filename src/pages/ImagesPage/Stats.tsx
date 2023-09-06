import React from "react";

import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Images from "../../images/headers/images.png";
import "./ImagesPage.css";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Header
        title="Images (Stats)"
        color={memoryTypes.images.color}
        image={Images}
        link="/images"
        buttonText="Images"
      />
    </div>
  );
};

export { Stats };
