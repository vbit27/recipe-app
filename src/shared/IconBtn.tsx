import classes from './IconBtn.module.css';
import React from 'react';

const IconBtn: React.FC<IconBtnProps> = ({ children, img, onClick }) => {
  return (
    <div className={classes.container} onClick={onClick}>
      <img src={`./icons/${img}.svg`} alt="icon" />
      <h3>{children}</h3>
    </div>
  );
};

interface IconBtnProps {
  img: string;
  onClick: () => void;
}

export default IconBtn;
