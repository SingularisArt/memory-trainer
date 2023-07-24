import React from 'react';
import { Link } from 'react-router-dom';

import { PiGearSixFill } from 'react-icons/pi';
import Typography from '@mui/material/Typography';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { mainTheme } from '../config/theme';

import Button from '../components/Button';
import Sidebar from '../components/Sidebar/Sidebar';

type HeaderProps = {
  title: string;
  color: string;
  image: string;
  onClick: (close: any) => JSX.Element;
};

const Header: React.FC<HeaderProps> = ({ title, color, image, onClick }) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: mainTheme.header.background,
        padding: '10px',
      }}
    >
      <div style={{ flex: 1, display: 'flex', verticalAlign: 'middle' }}>
        <Sidebar />

        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ color: color }}
          style={{ paddingTop: '0.5em' }}
        >
          {title}
        </Typography>
      </div>

      <div style={{ flex: 1 }}>
        <Link to='/'>
          <img src={image} height='80px' alt='logo' />
        </Link>
      </div>

      <div style={{ flex: 1, textAlign: 'right' }}>
        <Popup
          trigger={
            <Button
              icon={<PiGearSixFill />}
              text='Preferences'
              onClick={() => {}}
              style={{
                paddingTop: '1em',
                paddingBottom: '1em',
                paddingRight: '1.5em',
                paddingLeft: '1.5em',
                backgroundColor: mainTheme.button.preferences.background,
                color: mainTheme.button.preferences.color,
              }}
            />
          }
          modal
          nested
        >
          {(close) => onClick(close)}
        </Popup>
      </div>
    </header>
  );
};

export default Header;
