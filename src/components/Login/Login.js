import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const Login = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();

  // We don't want to check isFormValid for every keystroke
  // We can wait for some time and then check
  // so here if under 500ms new key is pressed
  // cleanup code will clean the previous timer
  // So now cleanup code runs for every keystroke but formValidity
  // will be check only when 500ms passed and in between no key is pressed
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form Validity!');
      setIsFormValid(
        emailInput.includes('@') && passwordInput.trim().length > 6
      );
    }, 500);

    // Doing Cleanup work of previous useEffect()
    return () => {
      console.log('CLEANUP!');
      clearTimeout(identifier);
    };
  }, [emailInput, passwordInput]);

  const emailBlurHandler = () => {
    setIsEmailValid(emailInput.includes('@'));
  };

  const passwordBlurHandler = () => {
    setIsPasswordValid(passwordInput.trim().length > 6);
  };

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
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
          <Button
            type="submit"
            className={classes.button}
            disabled={!isFormValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
