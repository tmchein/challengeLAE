import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <LoginPage />
        </Route>

        <Route path="/Register">
          <RegisterPage />
        </Route>

        <Route path="/">
          {/*  <LoginPage /> */}
          <NavBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
