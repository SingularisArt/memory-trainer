import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import Cards from '../../images/headers/cards.png';
import './CardsPage.css';

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Header
        title='Cards (Stats)'
        color={memoryTypes.cards.color}
        image={Cards}
        link='/cards/stats'
      />
    </div>
  );
};

export { Stats };
