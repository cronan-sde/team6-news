import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    logoContainer: {
      minWidth: 175,
      height: 150,
      width: 175,
      marginTop: 20,
      marginBottom: 20,
    },
    logo: {
      objectFit: 'cover',
      display: 'block',
      height: 150,
      width: 175,
    }
  });

const Logo = (props) => {
  const classes = useStyles();
    return (
        <Card className={classes.logoContainer}>
            <img src="https://newsteamsix.s3.us-east-2.amazonaws.com/logo.png" alt="News Team Six Logo" className={classes.logo}></img>
        </Card>
    )
}

export default Logo;