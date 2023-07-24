import Button from '../../components/Button';

import { mainTheme } from '../../config/theme';

type HomeProps = {
  onClick: () => void;
};

const Home: HomeProps = (onClick) => {
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
                style={{ width: '100px', height: '25px' }}
              />
            </td>
            <td style={{ color: mainTheme.note }}></td>
          </tr>
          <tr>
            <td>Groups:</td>
            <td>
              <input
                type='number'
                name='groups'
                min='1'
                max='10'
                style={{ width: '100px', height: '25px' }}
              />
            </td>
            <td style={{ color: mainTheme.note }}>
              Specify the digit groupings
            </td>
          </tr>
          <tr>
            <td>Maximum Memorization Time:</td>
            <td>
              <input
                type='number'
                name='maximum-memorization-time'
                min='1'
                style={{ width: '100px', height: '25px' }}
              />
            </td>
            <td style={{ color: mainTheme.note }}>
              seconds
            </td>
          </tr>
          <tr>
            <td>Maximum Recall Time:</td>
            <td>
              <input
                type='number'
                name='maximum-recall-time'
                min='1'
                style={{ width: '100px', height: '25px' }}
              />
            </td>
            <td style={{ color: mainTheme.note }}>
              seconds
            </td>
          </tr>
          <tr>
            <td>Preparation Time:</td>
            <td>
              <input
                type='number'
                name='preparation-maximum-time'
                min='1'
                style={{ width: '100px', height: '25px' }}
              />
            </td>
            <td style={{ color: mainTheme.note }}>
              seconds
            </td>
          </tr>
          <tr>
            <td>Hide Timer:</td>
            <td>
              <input type='checkbox' name='hide-timer' />
            </td>
            <td style={{ color: mainTheme.note }}>
              Select to hide the timer during memorization.
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ paddingTop: '1em' }}>
        <Button
          text='Start'
          style={{
            padding: '.78571429em 1.5em .78571429em',
            borderRadius: '.28571429rem',
            backgroundColor: mainTheme.button.ok.background,
            color: mainTheme.button.ok.color,
          }}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Home;
