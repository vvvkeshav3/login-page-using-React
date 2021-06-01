import React, { useContext } from 'react';
import Button from '../UI/Button/Button';
import classes from './Navigation.module.css';
import AuthContext from '../store/auth-context';

const Navigation = (props) => {
  const cxt = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <Button onClick={cxt.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
