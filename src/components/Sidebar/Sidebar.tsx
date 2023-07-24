import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

import Typography from '@mui/material/Typography';

import { mainTheme } from '../../config/theme';

import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className='container-fluid mt-3'>
        <div
          onClick={ToggleSidebar}
          style={{ paddingRight: '1em', verticalAlign: 'middle' }}
        >
          <button
            className='sidebar-btn'
            style={{
              backgroundColor: mainTheme.button.ok.background,
              color: mainTheme.button.ok.color,
            }}
          >
            <TbLayoutSidebarLeftExpand />
          </button>
        </div>
        <div
          className={`sidebar ${isOpen == true ? 'active' : ''}`}
          style={{ width: mainTheme.sidebar.width }}
        >
          <div
            className='sd-header'
            style={{
              backgroundColor: mainTheme.sidebar.header.background,
              color: mainTheme.sidebar.header.color,
            }}
          >
            <Typography gutterBottom variant='h5' component='div'>
              Sidebar
            </Typography>
            <div onClick={ToggleSidebar}>
              <button
                className='sidebar-btn'
                style={{
                  backgroundColor: mainTheme.button.ok.background,
                  color: mainTheme.button.ok.color,
                }}
              >
                <TbLayoutSidebarLeftCollapse />
              </button>
            </div>
          </div>
          <div className='sd-body'>
            <ul>
              <li>
                <Link to='/' className='sd-link'>Home</Link>
              </li>
              <li>
                <Link to='/stats' className='sd-link'>Stats</Link>
              </li>
              <li>
                <Link to='/cards' className='sd-link'>Cards</Link>
              </li>
              <li>
                <Link to='/images' className='sd-link'>Images</Link>
              </li>
              <li>
                <Link to='/international-names' className='sd-link'>International Names</Link>
              </li>
              <li>
                <Link to='/names' className='sd-link'>Names</Link>
              </li>
              <li>
                <Link to='/numbers' className='sd-link'>Numbers</Link>
              </li>
              <li>
                <Link to='/words' className='sd-link'>Words</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
