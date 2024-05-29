import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Board from './components/Board';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';

function getToken() {
  const tokenString = localStorage.getItem('token');
  if (tokenString) {
    try {
      const userToken = JSON.parse(tokenString);
      return userToken;
    } catch (error) {
      console.error('Error parsing token:', error);
      return null;
    }
  }
  return null;
}

function App() {
  const [token, setToken] = useState(() => getToken());

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login setToken={setToken} />
        </Route>
        <Route path="/board">
          {!token ? <Redirect to="/" /> : <Board token={token} setToken={setToken} />}
        </Route>
        <Route path="/register">
          <Register setToken={setToken} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
