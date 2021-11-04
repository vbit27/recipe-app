import classes from './FirstStep.module.css';
import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';

const FirstStep: React.FC = () => {
  const [input, setInput] = useState('');
  const [ingridient, setIngridient] = useState<null | string>(null);

  const addIngridient = () => {
    if (input) {
      setIngridient(input);
      setInput('');
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <h4>Step 1</h4>
        <h1>Choose your main ingridient</h1>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="eg. eggplant"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className={classes.inputBtn} onClick={addIngridient}>
            +
          </button>
        </form>
      </div>
      <div>
        <Button buttonStyle={'btn--outline'}>{'Next >'}</Button>
      </div>
    </div>
  );
};

export default FirstStep;
