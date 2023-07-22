import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/Header';

import Card from '../components/Card';
import Item from '../components/Item';

import Cards from '../images/dashboard_cards/cards.png';
import Images from '../images/dashboard_cards/images.png';
import InternationalNames from '../images/dashboard_cards/international_names.png';
import Names from '../images/dashboard_cards/names.png';
import Numbers from '../images/dashboard_cards/numbers.png';
import Words from '../images/dashboard_cards/words.png';

const HomePage = () => {
  return (
    <div>
      <Header />

      <Box sx={{ padding: '20px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/cards">
                <Card
                  image={Cards}
                  title="Cards"
                  description="Memorize playing cards."
                  color="#DB2828"
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/images">
                <Card
                  image={Images}
                  title="Images"
                  description="Memorize random images."
                  color="#8B6904"
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/international-names">
                <Card
                  image={InternationalNames}
                  width="70%"
                  title="International Names"
                  description="Memorize international names."
                  color="#B5CC18"
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/names">
                <Card
                  image={Names}
                  width="70%"
                  title="Names"
                  description="Memorize people's names."
                  color="#188732"
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/numbers">
                <Card
                  image={Numbers}
                  title="Numbers"
                  description="Memorize random numbers."
                  color="#1E7AEB"
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to="/words">
                <Card
                  image={Words}
                  title="Words"
                  description="Memorize random words."
                  color="#A333C8"
                />
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
