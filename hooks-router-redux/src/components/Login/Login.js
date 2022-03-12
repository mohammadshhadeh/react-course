import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// state The State snapshot used in the component re-render/re-evaluation cycle
// dispatchFn a function that can be used to dispatch a new action (trigger on update of the state)
// reducerFn (prevState, action) => newState -> function that is triggered automatically once an action is dispatched via dispatchFn
// initialState
// initFn to set the initialState

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.includes('@') }
    case 'USER_BLUR':
      return { value: state.value, isValid: state.value.includes('@') }
    default:
      return { value: '', isValid: false }
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.val, isValid: action.val.trim().length > 6 }
    case 'USER_BLUR':
        return { value: state.value, isValid: state.value.trim().length > 6 }
    default:
      return { value: '', isValid: false }
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: undefined
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: undefined
  })

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid)
  }, [emailIsValid, formIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'USER_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'USER_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
