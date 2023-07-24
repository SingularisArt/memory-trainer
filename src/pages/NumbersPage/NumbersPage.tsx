import React from 'react';

import Header from '../../components/Header/Header';

import Numbers from '../../images/headers/numbers.png';

import Home from './Home';
import Preparation from './Preparation';
import Slider from './Slider';
import Fill from './Fill';
import Status from './Status';

import { memoryTypes } from '../../config/theme';

import './NumbersPage.css';

type NumbersPageProps = {};
type onClickStartProps = {};

const onClickStart: onClickStartProps = () => {};

const NumbersPage: React.FC<NumbersPageProps> = () => {
  return (
    <div>
      <Header
        title='Numbers'
        color={memoryTypes.numbers.color}
        image={Numbers}
        link='/numbers/stats'
      />
      <div style={{ padding: '10px' }}>
        <Home onClick={onClickStart} />
      </div>
    </div>
  );
};

export default NumbersPage;
