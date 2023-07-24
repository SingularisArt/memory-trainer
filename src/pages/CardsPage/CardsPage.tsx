import React from 'react';

import Header from '../../components/Header/Header';

import Fill from './Fill';
import Home from './Home';
import Preparation from './Preparation';
import Slider from './Slider';
import Status from './Status';

import { memoryTypes } from '../../config/theme';

import Cards from '../../images/headers/cards.png';
import './CardsPage.css';

type CardsPageProps = {};
type onClickStartProps = {};

const onClickStart: onClickStartProps = () => {};

const CardsPage: React.FC<CardsPageProps> = () => {
  return (
    <div>
      <Header
        title='Cards'
        color={memoryTypes.cards.color}
        image={Cards}
        link='/cards/stats'
      />
      <div style={{ padding: '10px' }}>
        <Home onClick={onClickStart} />
      </div>
    </div>
  );
};

export default CardsPage;
