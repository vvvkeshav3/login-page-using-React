import React, { useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>Welcome Back!!</h1>
      <Button className={classes.btn} onClick={authCtx.onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;
