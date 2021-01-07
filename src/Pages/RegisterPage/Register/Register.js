import React from 'react';
import FormButton from '../../../Components/FormButton/FormButton';
import style from './Register.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={style.o_main_container}>
      <form onSubmit="" className={style.o_form_container}>
        <h3>Regístrate</h3>
        <label>Correo electrónico</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Digite su correo electrónico"
          className={style.o_input}
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="passsword"
          id=""
          placeholder="Digite su contraseña"
          className={style.o_input}
        />
        <FormButton text="Registrate" />
        <p>
          Ya tienes una cuenta?
          <Link to="/Login">
            <strong>INICIA SESIÓN</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
