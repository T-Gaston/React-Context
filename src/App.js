import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route
          exact
          path='/'
          render={ () => <div>Home</div>} 
          />
          <Route 
          exact
          path='/user/profile'
          render = { () => <UserProfile />}
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;
