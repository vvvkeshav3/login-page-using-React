import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Login Page</h1>
      {props.isLoggedIn && <Navigation onLogout={props.onLogout} />}
    </header>
  );
};

export default MainHeader;
