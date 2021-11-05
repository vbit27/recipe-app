import classes from './IconBtn.module.css';
import React from 'react';
import clsx from 'clsx';

const IconBtn: React.FC<IconBtnProps> = ({
  children,
  img,
  onClick,
  active,
}) => {
  return (
    <div
      className={clsx(classes.container, active && classes.active)}
      onClick={onClick}
    >
      <img src={`./icons/${img}.svg`} alt="icon" />
      <h3>{children}</h3>
    </div>
  );
};

interface IconBtnProps {
  img: string;
  onClick: () => void;
  active: boolean;
}

export default IconBtn;
