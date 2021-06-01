import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
  const activate = () => {
    inputRef.current.focus();
  };
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes['form-div']} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
