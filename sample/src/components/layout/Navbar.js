import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//import logo from '../../keops-logo/starwars.png';
import logo from '../../keops-logo/Logo-letters.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    flex: 'center',
  },
  logo: {
    height: 30,
    padding: '0',
    flex: 1
  },
  izq: {
    marginRight: 'auto',
  },
  der: {
    marginLeft: 'auto',
  },
  navLink: {
    fontStyle: 'normal',
    color: '#4D5824',
    textDecoration: 'none'
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <div className={classes.izq}>
            <NavLink to='/'>
              <img className={classes.logo} src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className={classes.der}>
            <Button
              color="primary">
              <NavLink to='/signin' className={classes.navLink}>
                Acceso
                  </NavLink>
            </Button>
            <Button
              color="primary">
              <NavLink to='/signup' className={classes.navLink}>
                Registro
                </NavLink>
            </Button>
            <Button
              color="primary">
              <NavLink to='/contacto' className={classes.navLink}>
                Contacto
                </NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar