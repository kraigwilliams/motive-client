import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Topic from './components/Topic/Topic'
import Thought from './components/Thought/Thought'
import Dashboard from './components/Dashboard/Dashboard'
import Connections from './components/Connections/Connections'
import AddThought from './components/AddThought/AddThought'
import AddTopic from './components/AddTopic/AddTopic'

// import GroupsPage from './components/GroupsPage/GroupsPage'
// import NotFoundPage from './components/Utils/NotFoundPage'
// import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <main className="app">
      <Switch>
        <Route
          exact
          path='/'
          component={LandingPage}
        />

        <Route
          exact
          path='/signup'
          component={SignUp}
        />

        <Route 
          path='/login'
          component={Login}
        />

        <Route 
          path='/dashboard'
          component={Dashboard}
        />

        <Route 
          path='/connections'
          component={Connections}
        />

        <Route 
          path='/topics/:topic_id'
          component={Topic}
        />
    
        <Route 
          path='/thoughts/:thought_id'
          component={Thought}
        />

        <Route 
          path='/add-thought'
          component={AddThought}
        />

        <Route 
          path='/add-topic'
          component={AddTopic}
        />

           
        <Route 
          path='/groups'
          // component={GroupsPage}
        />

        <Route
          // component={NotFoundPage}
        />
      </Switch>
    </main>
    </>
  );
}

export default App;