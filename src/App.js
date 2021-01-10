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
          <Route path="/Login">
            <LoginPage />
          </Route>

          <Route path="/Register">
            <RegisterPage />
          </Route>

          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>

          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
