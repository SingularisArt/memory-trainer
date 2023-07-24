import Header from '../../components/Header';
import Button from '../../components/Button';

import './NumbersPage.css';

import { mainTheme, memoryTypes } from '../../config/theme';

import Numbers from '../../images/headers/numbers.png';

const onClick = ({ close }) => {
  return (
    <div className='modal'>
      <div className='header'>Numbers Preferences</div>
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

const Home = () => {
  return <div></div>;
};

const Slider = () => {};
const Fill = () => {};
const Status = () => {};

const NumbersPage = () => {
  return (
    <div>
      <Header
        title='Numbers'
        color={memoryTypes.numbers.color}
        image={Numbers}
        onClick={onClick}
      />
      <Home />
    </div>
  );
};

export default NumbersPage;
