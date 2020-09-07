import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import { Link } from 'react-router-dom';

const styleHelper = require('../styles/StylesHelper.js');


function MainMenu() {
  const classes = styleHelper.menuStyle();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.grow} position="static">
        <Toolbar>
          <Link to="/">
          <HomeIcon fontSize="large" className={classes.iconClass}/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    );
  }

export default MainMenu;