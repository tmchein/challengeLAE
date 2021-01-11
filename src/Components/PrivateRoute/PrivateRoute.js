import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { authenticated, loading, AuthenticatedUser } = authContext;

  useEffect(() => {
    AuthenticatedUser();
    //eslint-disable-next-line
  }, []);

  // se crea un componente que toma un componente y se revisa
  //si el usuario esta autenticado

  //esta funcion siempre retorna falso, por lo cual se conserva
  //el componente, si solo se trabaja con authenticated el useeffect
  //comienza como null y luego cambia a true, habra un flash de pantallas
  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
