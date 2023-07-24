import React from 'react';

import Button from '../../components/Button';

type HomeProps = {
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onClick }) => {
  return (
    <div className='config-table'>
      <table className='config'>
        <tbody>
          <tr>
            <td>Number of Cards to Memorize:</td>
            <td>
              <input className='config-input'
                type='number'
                name='digits-to-memorize'
                min='1'
              />
            </td>
            <td className='note'></td>
          </tr>
          <tr>
            <td>Groups:</td>
            <td>
              <input className='config-input'
                type='number'
                name='groups'
                min='1'
                max='9'
              />
            </td>
            <td className='note'>
              Specify the card groupings
            </td>
          </tr>
          <tr>
            <td>Card Spacing:</td>
            <td>
              <select
                name='card-spacing'
              >
                <option value='regular'>Regular</option>
                <option value='compact'>Compact</option>
              </select>
            </td>
            <td className='note'>
              Select the distance between cards.
            </td>
          </tr>
          <tr>
            <td>Maximum Memorization Time:</td>
            <td>
              <input className='config-input'
                type='number'
                name='maximum-memorization-time'
                min='1'
              />
            </td>
            <td className='note'>seconds</td>
          </tr>
          <tr>
            <td>Maximum Recall Time:</td>
            <td>
              <input className='config-input'
                type='number'
                name='maximum-recall-time'
                min='1'
              />
            </td>
            <td className='note'>seconds</td>
          </tr>
          <tr>
            <td>Preparation Time:</td>
            <td>
              <input className='config-input'
                type='number'
                name='preparation-maximum-time'
                min='1'
              />
            </td>
            <td className='note'>seconds</td>
          </tr>
          <tr>
            <td>Hide Timer:</td>
            <td>
              <input type='checkbox' name='hide-timer' />
            </td>
            <td className='note'>
              Select to hide the timer during memorization.
            </td>
          </tr>
        </tbody>
      </table>

      <div className='start-btn-div'>
        <Button
          text='Start'
          className='start-btn'
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Home;
