import React, { useState, useContext } from 'react';
import FormButton from '../../../Components/FormButton/FormButton';
import style from './Register.module.scss';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/authContext';

const Register = () => {
  const authContext = useContext(AuthContext);
  const { registerUser } = authContext;

  //state para el usuario y contraseña
  const [user, setuser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  //agregando los datos al estado utilizando el name de los inputs
  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //destructuring del user para manejar los valores de los inputs
  const { username, firstName, lastName, phone, email, password } = user;

  //Metodo que crea un usuario
  const createUser = (e) => {
    e.preventDefault();
    //Validar la contraseña
    //Regular expresion para la clave, mayuscula, minuscula, numeros

    const low = /[a-z]/;
    const cap = /[A-Z]/;
    const num = /[0-9]/;

    //Validando si la clave cumple con los parametros
    if (password !== '' || password !== ' ') {
      if (password.length < 6) {
        alert('La contraseña debe tener más de 6 caracteres');
        return;
      }
      if (!num.test(password)) {
        alert('La contraseña debe tener al menos un numero');
        return;
      }
      if (!low.test(password)) {
        alert('La contraseña debe tener al menos una letra minúscula');

        return;
      }
      if (!cap.test(password)) {
        alert('La contraseña debe tener al menos una letra mayuscula');
        return;
      }
    }

    alert('Usuario creado satisfactoriamente');

    //Enviando datos del usuario al backend

    registerUser({
      username,
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    //Limpiando los campos del formulario
    setuser({
      username: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className={style.o_main_container}>
      <form onSubmit={createUser} className={style.o_form_container}>
        <h3>Regístrate</h3>
        <label>Nombre de usuario</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Digite su nombre de usuario"
          className={style.o_input}
        />

        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="Escriba su nombre"
          className={style.o_input}
        />

        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Escriba su apellido"
          className={style.o_input}
        />

        <label>Telefono</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Escriba su número telefonico"
          className={style.o_input}
        />

        <label>Correo electrónico</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Digite su correo electrónico"
          className={style.o_input}
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Digite su contraseña"
          className={style.o_input}
        />
        <p className={style.o_password_hint}>
          La contraseña debe tener 6 dígitos, un número y al menos una letra
          mayúscula *
        </p>
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
