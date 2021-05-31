import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Navigation.module.css';
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <Button onClick={props.onLogout}>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
