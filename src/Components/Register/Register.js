import React from 'react';
import style from './Register.module.scss';

const Register = () => {
  return (
    <form>
      <label htmlFor="">Correo electrónico</label>
      <input type="text" name="r_email" />

      <label htmlFor="">Contraseña</label>
      <input type="text" name="r_password" />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
