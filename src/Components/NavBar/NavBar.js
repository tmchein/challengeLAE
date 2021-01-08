import React, { useState } from 'react';
import style from './NavBar.module.scss';
import NavOption from './NavOption/NavOption';

const NavBar = ({ navTitle }) => {
  const [startPress, setstartPress] = useState(true);
  const [userPress, setuserPress] = useState(false);
  const [taskPress, settaskPress] = useState(false);

  const changeNavOptions = (section) => {
    switch (section) {
      case 'Inicio':
        setstartPress(true);
        setuserPress(false);
        settaskPress(false);
        break;
      case 'Usuarios':
        setstartPress(false);
        setuserPress(true);
        settaskPress(false);
        break;
      case 'Tareas':
        setstartPress(false);
        setuserPress(false);
        settaskPress(true);
        break;

      default:
        setstartPress(true);
        setuserPress(false);
        settaskPress(false);
    }
  };

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
          <NavOption
            option="Inicio"
            img="/resources/img/home.svg"
            navTitle={navTitle}
            isPressed={changeNavOptions}
            setPressed={startPress}
          />
        </li>
        <li>
          <NavOption
            option="Usuarios"
            img="/resources/img/people.svg"
            navTitle={navTitle}
            isPressed={changeNavOptions}
            setPressed={userPress}
          />
        </li>
        <li>
          <NavOption
            option="Tareas"
            img="/resources/img/list.svg"
            navTitle={navTitle}
            isPressed={changeNavOptions}
            setPressed={taskPress}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
