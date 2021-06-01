import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Login Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
