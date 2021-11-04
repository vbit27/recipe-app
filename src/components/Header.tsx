import React from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <h4>Recipe</h4>
      </div>
    </>
  );
};

export default Header;
