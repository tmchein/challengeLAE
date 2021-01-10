import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthState from './context/authState';
import TokenAuth from './config/tokenAuth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  //revisar si el usuario tiene un token

  const token = localStorage.getItem('token');

  if (token) {
    TokenAuth(token);
  }

  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/Login">
            <LoginPage />
          </Route>

          <Route exact path="/Register">
            <RegisterPage />
          </Route>

          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>

          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
