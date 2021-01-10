import React, { useContext, useEffect } from 'react';
import DashNav from '../DashNav/DashNav';
import TodoPanel from '../TodoPanel/TodoPanel';
import UserTable from '../UserTable/UserTable';
import style from './DashContent.module.scss';
import AuthContext from '../../context/authContext';

const DashContent = ({ sectionTitle }) => {
  //extraer la informacion de autenticacion
  //necesitamos la funcion de authenticateduser

  const authContext = useContext(AuthContext);
  const { user, AuthenticatedUser } = authContext;

  useEffect(() => {
    AuthenticatedUser();
  }, []);

  return (
    <div className={style.o_main_container}>
      {user ? (
        <DashNav
          title={sectionTitle}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      ) : null}
      {user
        ? sectionTitle === 'Inicio' && (
            <div className={style.o_welcome_container}>
              <h1 className={style.o_welcome_message}>
                {`Bienvenido ${user.firstName}`}
              </h1>
              <img src="/resources/img/welcome_img.svg" alt="welcome" />
            </div>
          )
        : null}
      {sectionTitle === 'Usuarios' && <UserTable />}
      {sectionTitle === 'Tareas' && <TodoPanel />}
    </div>
  );
};

export default DashContent;
