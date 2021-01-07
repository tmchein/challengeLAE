import React from 'react';
import Register from '../../Components/Register/Register';
import style from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={style.o_main_container}>
      <Register />
    </div>
  );
};

export default RegisterPage;
