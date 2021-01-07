import React from 'react';
import Login from '../../Components/Login/Login';
import style from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={style.o_main_container}>
      <Login />
    </div>
  );
};

export default LoginPage;
