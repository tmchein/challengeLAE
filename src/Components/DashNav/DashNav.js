import React from 'react';
import style from './DashNav.module.scss';

const DashNav = () => {
  return (
    <nav className={style.o_nav_container}>
      <h2 className={style.o_title}>Inicio</h2>
      <div className={style.o_tool_container}>
        <div className={style.o_toolbox}>
          <img src="/resources/img/search.svg" alt="Search" />
          <img src="/resources/img/notifications.svg" alt="Notifications" />
        </div>
        <h5 className={style.o_username}>Jones Ferdinand</h5>
        <img
          src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg"
          alt="user"
          className={style.o_user_picture}
        />
      </div>
    </nav>
  );
};

export default DashNav;
