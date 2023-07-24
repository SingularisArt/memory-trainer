import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import Names from '../../images/headers/names.png';
import './NamesPage.css';

type NamesPageProps = {};

const NamesPage: React.FC<NamesPageProps> = () => {
  return (
    <div>
      <Header
        title='Names'
        color={memoryTypes.names.color}
        image={Names}
        link='/names/stats'
      />
    </div>
  );
};

export default NamesPage;
