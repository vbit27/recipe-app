import classes from './Input.module.css';
import React from 'react';

const Input: React.FC<InputProps> = ({ onChange, onClick, input }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="eg. eggplant"
          onChange={onChange}
          value={input}
        />
        <button className={classes.inputBtn} onClick={onClick}>
          +
        </button>
      </form>
    </>
  );
};

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  onClick: () => void;
}

export default Input;
