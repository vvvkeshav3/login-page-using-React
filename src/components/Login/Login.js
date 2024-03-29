import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = () => {
  //   const [emailInput, setEmailInput] = useState('');
  //   const [isEmailValid, setIsEmailValid] = useState();
  //   const [passwordState, setpasswordState] = useState('');
  //   const [isPasswordValid, setIsPasswordValid] = useState();
  const [isFormValid, setIsFormValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form Validity!');
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);

    // Doing Cleanup work of previous useEffect()
    return () => {
      console.log('CLEANUP!');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailBlurHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const passwordBlurHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={submitFormHandler}>
        <Input
          id="email"
          ref={emailInputRef}
          type="email"
          label="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          isValid={emailIsValid}
        ></Input>
        <Input
          id="password"
          ref={passwordInputRef}
          type="password"
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          isValid={passwordIsValid}
        ></Input>

        <Button
          type="submit"
          className={classes.button}
          //   disabled={!isFormValid}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
