import React from "react";

import Header from "../../components/Header/Header";

import { memoryTypes } from "../../config/theme";

import Numbers from "../../images/headers/numbers.png";
import "./NumbersPage.css";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Header
        title="Numbers (Stats)"
        color={memoryTypes.numbers.color}
        image={Numbers}
        link="/numbers"
        buttonText="Numbers"
      />
    </div>
  );
};

export { Stats };
