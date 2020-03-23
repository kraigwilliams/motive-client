import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import GroupsPage from './components/GroupsPage/GroupsPage'
import NotFoundPage from './components/Utils/NotFoundPage'
import './App.css';

function App() {
  return (
    <main className="root">
      <NavBar/>
      
      <Switch>
        <Route
          to='/'
          component={LandingPage}
        />

        <Route
          to='/signup'
          component={SignUp}
        />

        <Route 
          to='/login'
          component={Login}
        />

        <Route 
          to='/dashboard'
          component={Dashboard}
        />
       
        <Route 
          to='/groups'
          component={GroupsPage}
        />

        <Route
          component={NotFoundPage}
        />
      </Switch>
    </main>
  );
}

export default App;
