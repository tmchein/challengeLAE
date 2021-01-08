import React from 'react';
import DashNav from '../DashNav/DashNav';
import TodoPanel from '../TodoPanel/TodoPanel';
import style from './DashContent.module.scss';

const DashContent = ({ sectionTitle }) => {
  return (
    <div className={style.o_main_container}>
      <DashNav title={sectionTitle} />
      {sectionTitle === 'Inicio' && (
        <div className={style.o_welcome_container}>
          <h1>Bienvenido Jones</h1>
          <img src="/resources/img/welcome_img.svg" alt="welcome" />
        </div>
      )}
      {sectionTitle === 'Usuarios' && (
        <div className={style.o_welcome_container}>
          <h1>Bienvenido a {sectionTitle}</h1>
          <img src="/resources/img/welcome_img.svg" alt="welcome" />
        </div>
      )}
      {sectionTitle === 'Tareas' && <TodoPanel />}
    </div>
  );
};

export default DashContent;
