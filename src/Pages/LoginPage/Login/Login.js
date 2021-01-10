import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormButton from '../../../Components/FormButton/FormButton';
import style from './Login.module.scss';
import AuthContext from '../../../context/authContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { message, authenticated, login } = authContext;

  // En caso de que el usuario se haya autenticado o registrado
  let history = useHistory();
  useEffect(() => {
    if (authenticated) {
      history.push('/Dashboard');
    }

    if (message) {
      alert(message);
    }
  }, [message, authenticated, history]);

  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios
    if (email.trim() === '' || password.trim() === '') {
      alert('Todos los campos son obligatorios');
    }

    //Pasarlo al action
    login({ email, password });

    if (!message || message == null) {
      alert('Bienvenido');
    }
  };

  return (
    <div className={style.o_main_container}>
      <form onSubmit={handleLogin} className={style.o_form_container}>
        <h3>Inicia sesión</h3>
        <label>Correo electrónico</label>
        <input
          type="text"
          name="email"
          placeholder="Digite su correo electronico"
          className={style.o_input}
          onChange={handleChange}
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Digite su contraseña"
          className={style.o_input}
          onChange={handleChange}
        />
        <FormButton text="Iniciar Sesión" />
        <p>
          No tienes una cuenta?
          <Link to="/Register">
            <strong>REGISTRATE</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
