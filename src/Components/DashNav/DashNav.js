import React, { useContext } from 'react';
import style from './DashNav.module.scss';
import AuthContext from '../../context/authContext';

const DashNav = ({ title, firstName, lastName }) => {
  const authContext = useContext(AuthContext);
  const { user, AuthenticatedUser, logout } = authContext;

  return (
    <nav className={style.o_nav_container}>
      <h2 className={style.o_title}>{title}</h2>
      <div className={style.o_tool_container}>
        <div className={style.o_toolbox}>
          <img src="/resources/img/search.svg" alt="Search" />
          <img src="/resources/img/notifications.svg" alt="Notifications" />
        </div>
        <h5 className={style.o_username}>{`${firstName} ${lastName}`}</h5>
        <button
          className={style.o_logout_btn}
          onClick={() => {
            logout();
          }}
        >
          <img src="/resources/img/logout.svg" alt="cerrar sesion" />
        </button>
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
