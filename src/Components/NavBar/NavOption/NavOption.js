import React from 'react';
import style from './NavOption.module.scss';

const NavOption = ({ option, img, navTitle, isPressed, setPressed }) => {
  const handleChange = (e) => {
    navTitle(e.target.name);
    isPressed(e.target.name);
  };

  return (
    <button
      className={
        setPressed === true
          ? `${style.o_nav_option} ${style.o_nav_pressed}`
          : style.o_nav_option
      }
      onClick={handleChange}
      name={option}
    >
      <img src={img} alt="option" />
      {option}
    </button>
  );
};

export default NavOption;
