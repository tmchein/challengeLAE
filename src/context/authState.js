import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

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
    } catch (error) {
      console.log(error.response.data.msg);

      dispatch({
        type: REGISTER_ERROR,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
