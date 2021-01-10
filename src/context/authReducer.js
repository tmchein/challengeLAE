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
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    case OBTAIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_ERROR:
    default:
      return state;
  }
};

export default authReducer;
