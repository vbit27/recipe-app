import classes from './Button.module.css';
import React from 'react';
import clsx from 'clsx';

const STYLES = ['btn--main', 'btn--outline'];

const Button: React.FC<ButtonProp> = ({ onClick, children, buttonStyle }) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button
      className={clsx(classes.btn, classes[checkStyle])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface ButtonProp {
  onClick?: () => void;
  children: string;
  buttonStyle: string;
}

export default Button;
