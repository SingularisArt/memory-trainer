import Button from '../../components/Button';

import { mainTheme } from '../../config/theme';

type HomeProps = {};

const Home: HomeProps = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <table className='config'>
        <tbody>
          <tr>
            <td>Number of Digits to Memorize:</td>
            <td>
              <input
                type='number'
                name='digits-to-memorize'
                min='1'
                placeholder='100'
                className='input-config'
              />
            </td>
            <td className='note'></td>
          </tr>
          <tr>
            <td>Groups:</td>
            <td>
              <input
                type='number'
                name='groups'
                min='1'
                max='10'
                placeholder='3'
                className='input-config'
              />
            </td>
            <td className='note'>
              Specify the digit groupings (1-10).
            </td>
          </tr>
          <tr>
            <td>Maximum Memorization Time:</td>
            <td>
              <input
                type='number'
                name='maximum-memorization-time'
                min='1'
                placeholder='60'
                className='input-config'
              />
            </td>
            <td className='note'>
              Seconds.
            </td>
          </tr>
          <tr>
            <td>Maximum Recall Time:</td>
            <td>
              <input
                type='number'
                name='maximum-recall-time'
                min='1'
                placeholder='120'
                className='input-config'
              />
            </td>
            <td className='note'>
              Seconds.
            </td>
          </tr>
          <tr>
            <td>Preparation Time:</td>
            <td>
              <input
                type='number'
                name='preparation-maximum-time'
                min='1'
                placeholder='20'
                className='input-config'
              />
            </td>
            <td className='note'>
              Seconds.
            </td>
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

      <div style={{ paddingTop: '1em' }}>
        <Button
          text='Start'
          className='start-btn'
        />
      </div>
    </div>
  );
};

export default Home;
