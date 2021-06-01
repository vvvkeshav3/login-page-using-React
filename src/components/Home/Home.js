import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css'
import Button from '../UI/Button/Button';
const Home = (props)=>{

    return <Card className={classes.card}>
        <h1 className={classes.title}>Welcome Back!!</h1>
        <Button className={classes.btn} onClick={props.onLogout}>Logout</Button>
    </Card>

}

export default Home;