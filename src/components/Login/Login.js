import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const Login = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();

  const emailBlurHandler = () => {
    setIsEmailValid(emailInput.includes('@'));
  };

  const passwordBlurHandler = () => {
    setIsPasswordValid(passwordInput.trim().length > 6);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);

    setIsFormValid(
      event.target.value.includes('@') && passwordInput.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);

    setIsFormValid(
      emailInput.includes('@') && event.target.value.trim().length > 6
    );
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(emailInput,passwordInput);
    props.onLogin(emailInput, passwordInput);
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={submitFormHandler}>
        <div className={classes['form-div']}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={emailInput}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={isEmailValid === false ? classes.invalid : ''}
          />
        </div>
        <div className={classes['form-div']}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordInput}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className={isPasswordValid === false ? classes.invalid : ''}
          />
        </div>
        <div className={classes['div-btn']}>
          <Button type="submit" className={classes.button} disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
