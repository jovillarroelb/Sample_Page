import React from 'react';
 import logo from '../../sample-logo/starwars.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoFull: {
    height: 500,
    display: 'block',
    margin: 'auto',
    padding: '70px'
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img className={classes.logoFull} src={logo} alt="logo-full" />
        <h1>{[...new Array(12)]
          .map(
            () => `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste voluptate fugiat modi debitis officiis.
              Provident voluptatibus similique corrupti magnam sed mollitia fugiat vel, nihil,
              aperiam praesentium sit cum adipisci hic.`,
          )
          .join('\n')}
        </h1>
      </div>
    </div>
  )
}

export default Home;