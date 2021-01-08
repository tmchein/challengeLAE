import React from 'react';
import style from './NavBar.module.scss';
import NavOption from './NavOption/NavOption';

const NavBar = () => {
  return (
    <nav className={style.o_nav_container}>
      <div className={style.o_img_container}>
        <img
          src="/resources/img/lae-logo.png"
          alt="lae logo"
          className={style.o_logo}
        />
      </div>
      <ul>
        <li>
          <NavOption option="Inicio" img="/resources/img/home.svg" />
        </li>
        <li>
          <NavOption option="Usuarios" img="/resources/img/people.svg" />
        </li>
        <li>
          <NavOption option="Tareas" img="/resources/img/list.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
