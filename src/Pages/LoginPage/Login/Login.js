import React from 'react';
import FormButton from '../../../Components/FormButton/FormButton';
import style from './Login.module.scss';

const Login = () => {
  return (
    <div className={style.o_main_container}>
      <form onSubmit="" className={style.o_form_container}>
        <h3>Inicia sesión</h3>
        <label htmlFor="">Correo electrónico</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Digite su correo electronico"
          className={style.o_input}
        />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="passsword"
          id=""
          placeholder="Digite su contraseña"
          className={style.o_input}
        />
        <FormButton text="Iniciar Sesión" />
        <p>
          No tienes una cuenta? <strong>REGISTRATE</strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
