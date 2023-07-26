import React from "react";

import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Names from "../../images/headers/names.png";
import "./NamesPage.css";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Header
        title="Names (Stats)"
        color={memoryTypes.names.color}
        image={Names}
        link="/names"
        buttonText="Names"
      />
    </div>
  );
};

export { Stats };
