import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import InternationalNames from '../../images/headers/international_names.png';
import './InternationalNamesPage.css';

type InternationalNamesPageProps = {};

const InternationalNamesPage: React.FC<InternationalNamesPageProps> = () => {
  return (
    <div>
      <Header
        title='International Names'
        color={memoryTypes.internationalNames.color}
        image={InternationalNames}
        link='/international-names/stats'
      />
    </div>
  );
};

export default InternationalNamesPage;
