import { mainTheme, memoryTypes } from '../config/theme';

import Header from '../components/Header';
import Button from '../components/Button';

import Words from '../images/headers/words.png';

const onClick = ({ close }) => {
  return (
    <div className="modal">
      <div className="header">Words Preferences</div>
      <div className="content">hi</div>
      <div className="actions">
        <Button
          text="Ok"
          onClick={() => {
            close();
          }}
          style={{ backgroundColor: mainTheme.button.ok.background, color: mainTheme.button.ok.color }}
        />
        <span style={{ paddingRight: '10px' }}></span>
        <Button
          text="Cancel"
          onClick={() => {
            close();
          }}
          style={{ backgroundColor: mainTheme.button.cancel.background, color: mainTheme.button.cancel.color }}
        />
      </div>
    </div>
  );
};

const WordsPage = () => {
  return (
    <div>
      <Header title="Words" color={memoryTypes.words.color} image={Words} onClick={onClick} />
    </div>
  );
};

export default WordsPage;
