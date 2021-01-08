import React from 'react';
import DashNav from '../DashNav/DashNav';
import style from './DashContent.module.scss';

const DashContent = () => {
  return (
    <div className={style.o_main_container}>
      <DashNav />
      <div className={style.o_welcome_container}>
        <h1>Bienvenido Jones</h1>
        <img src="/resources/img/welcome_img.svg" alt="welcome" />
      </div>
    </div>
  );
};

export default DashContent;
