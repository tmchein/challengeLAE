import React from 'react';
import style from './NavOption.module.scss';

const NavOption = ({ option, img }) => {
  return (
    <button className={style.o_nav_option}>
      <img src={img} alt="option" />
      {option}
    </button>
  );
};

export default NavOption;
