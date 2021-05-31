import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css'
const Home = ()=>{

    return <Card className={classes.card}>
        <h1 className={classes.title}>Welcome Back!!</h1>
    </Card>

}

export default Home;