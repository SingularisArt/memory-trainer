import { mainTheme, memoryTypes } from '../config/theme';

import Header from '../components/Header';
import Button from '../components/Button';

import InternationalNames from '../images/headers/international_names.png';

const onClick = ({ close }) => {
  return (
    <div className='modal'>
      <div className='header'>International Names Preferences</div>
      <div className='content'>hi</div>
      <div className='actions'>
        <Button
          text='Ok'
          onClick={() => {
            close();
          }}
          style={{
            backgroundColor: mainTheme.button.ok.background,
            color: mainTheme.button.ok.color,
          }}
        />
        <span style={{ paddingRight: '10px' }}></span>
        <Button
          text='Cancel'
          onClick={() => {
            close();
          }}
          style={{
            backgroundColor: mainTheme.button.cancel.background,
            color: mainTheme.button.cancel.color,
          }}
        />
      </div>
    </div>
  );
};

const InternationalNamesPage = () => {
  return (
    <div>
      <Header
        title='International Names'
        color={memoryTypes.internationalNames.color}
        image={InternationalNames}
        onClick={onClick}
      />
    </div>
  );
};

export default InternationalNamesPage;
