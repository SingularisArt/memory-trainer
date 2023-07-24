import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import Words from '../../images/headers/words.png';

import './WordsPage.css';

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  return (
    <div>
      <Header
        title='Words (Stats)'
        color={memoryTypes.words.color}
        image={Words}
        link='/words/stats'
      />
    </div>
  );
};

export { Stats };
