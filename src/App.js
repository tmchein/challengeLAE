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

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
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
