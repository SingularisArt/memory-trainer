import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import Images from '../../images/headers/images.png';
import './ImagesPage.css';

type ImagesPageProps = {};

const ImagesPage: React.FC<ImagesPageProps> = () => {
  return (
    <div>
      <Header
        title='Images'
        color={memoryTypes.images.color}
        image={Images}
        link='/images/stats'
      />
    </div>
  );
};

export default ImagesPage;
