import React from 'react';
import style from './Login.module.scss';

const Login = () => {
  return (
    <div className={style.o_main_container}>
      <form onSubmit="" className={style.o_form_container}>
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
          type="text"
          name="passsword"
          id=""
          placeholder="Digite su contraseña"
          className={style.o_input}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
