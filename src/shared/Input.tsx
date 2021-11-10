import classes from './Input.module.css';
import React, { useEffect, useState } from 'react';

const Input: React.FC<InputProps> = ({ onClick }) => {
  const [input, setInput] = useState('');

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="eg. eggplant"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          value={input}
        />
        <button className={classes.inputBtn} onClick={() => onClick(input)}>
          +
        </button>
      </form>
    </>
  );
};

interface InputProps {
  onClick: (input: string) => void;
}

export default Input;
