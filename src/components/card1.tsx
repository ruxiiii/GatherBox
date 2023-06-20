import React, { useState } from 'react';
import Header from './common/header/header';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import frontFirstImage from 'src/assets/front_image.217eeaaf.webp'
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(() => ({
  card1: {
    position: "relative",
    width: '100%',
    height: 0, // Set the height to zero
    paddingBottom: '66.67%', // Maintain the 3:2 aspect ratio
    '& .MuiCardMedia-root': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: '75% 100%', // Set the desired background position
    },
  },
}));

const Card1 = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card1}>
        <CardMedia
          component="img"
          alt="Gather Box Background"
          image={frontFirstImage}
          title="Gather Box Background"
        />
        <Header />
      </Card>
    </div>
  );
};

export default Card1;