import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '../../components/Card';
import Item from '../../components/Item';

import { memoryTypes } from '../../config/theme';

import Cards from '../../images/dashboard_cards/cards.png';
import Images from '../../images/dashboard_cards/images.png';
import InternationalNames from '../../images/dashboard_cards/international_names.png';
import Names from '../../images/dashboard_cards/names.png';
import Numbers from '../../images/dashboard_cards/numbers.png';
import Words from '../../images/dashboard_cards/words.png';
import './HomePage.css';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div style={{ padding: '15px' }}>
      <Box>
        <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/cards'>
                <Card
                  image={Cards}
                  title='Cards'
                  description='Memorize playing cards.'
                  bg={memoryTypes.cards.background}
                  color={memoryTypes.cards.color}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/images'>
                <Card
                  image={Images}
                  width='70%'
                  title='Images'
                  description='Memorize random images.'
                  bg={memoryTypes.images.background}
                  color={memoryTypes.images.color}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/international-names'>
                <Card
                  image={InternationalNames}
                  width='60%'
                  title='International Names'
                  description='Memorize international names.'
                  color={memoryTypes.internationalNames.color}
                  bg={memoryTypes.internationalNames.background}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/names'>
                <Card
                  image={Names}
                  width='60%'
                  title='Names'
                  description='Memorize people names.'
                  color={memoryTypes.names.color}
                  bg={memoryTypes.names.background}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/numbers'>
                <Card
                  image={Numbers}
                  width='70%'
                  title='Numbers'
                  description='Memorize random numbers.'
                  color={memoryTypes.numbers.color}
                  bg={memoryTypes.numbers.background}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link to='/words'>
                <Card
                  image={Words}
                  title='Words'
                  description='Memorize random words.'
                  color={memoryTypes.words.color}
                  bg={memoryTypes.words.background}
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
