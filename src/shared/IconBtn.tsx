import classes from './IconBtn.module.css';
import React from 'react';
import clsx from 'clsx';

const IconBtn: React.FC<IconBtnProps> = ({
  children,
  img,
  onClick,
  active,
  filterStyle,
}) => {
  return (
    <div
      className={clsx(
        classes.container,
        active && classes.active,
        filterStyle && classes.filter
      )}
      onClick={onClick}
    >
      {!filterStyle && <img src={`./icons/${img}.svg`} alt="icon" />}
      <p>
        <strong>{children}</strong>
      </p>
    </div>
  );
};

interface IconBtnProps {
  img: string;
  onClick: () => void;
  active: boolean;
  filterStyle?: boolean;
}

export default IconBtn;
