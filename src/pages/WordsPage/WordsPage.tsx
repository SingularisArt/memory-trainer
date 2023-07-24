import React from 'react';

import Header from '../../components/Header/Header';

import { memoryTypes } from '../../config/theme';

import Words from '../../images/headers/words.png';

type WordsPageProps = {};

const WordsPage: React.FC<WordsPageProps> = () => {
  return (
    <div>
      <Header
        title='Words'
        color={memoryTypes.words.color}
        image={Words}
        link='/words/stats'
      />
    </div>
  );
};

export default WordsPage;
