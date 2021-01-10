import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import TokenAuth from '../config/tokenAuth';

import {
  SUCCESSFUL_REGISTER,
  REGISTER_ERROR,
  OBTAIN_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} from '../types';

import axiosClient from '../config/axios';

const AuthState = (props) => {
  const initialState = {
    //almacenar el token en localstorage
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //funciones

  const registerUser = async (data) => {
    try {
      const response = await axiosClient.post('/users', data);
      console.log(response.data);
      dispatch({
        type: SUCCESSFUL_REGISTER,
        payload: response.data,
      });

      //Obtener el usuario

      AuthenticatedUser();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  //Retorna el usuario autenticado

  const AuthenticatedUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      // Funcion para enviar el token por headers
      TokenAuth(token);
    }

    try {
      const response = await axiosClient.get('/auth');
      /* console.log(response); */
      dispatch({
        type: OBTAIN_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //Cuando el usuario inicia sesion
  const login = async (data) => {
    try {
      const response = await axiosClient.post('/auth', data);
      console.log(response);
      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: response.data,
      });

      //obtener el usuario
      AuthenticatedUser();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  //Cerrar la sesion del usuario
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
        login,
        AuthenticatedUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
