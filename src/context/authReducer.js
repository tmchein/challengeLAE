import {
  SUCCESSFUL_REGISTER,
  REGISTER_ERROR,
  OBTAIN_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTER:
    case SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };
    case LOGOUT:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
      };
    case OBTAIN_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
