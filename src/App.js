import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import NavBar from './components/NavBar/NavBar'
// import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Topic from './components/Topic/Topic'
import Thought from './components/Thought/Thought'
// import Dashboard from './components/Dashboard/Dashboard'
// import GroupsPage from './components/GroupsPage/GroupsPage'
// import NotFoundPage from './components/Utils/NotFoundPage'
// import './App.css';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <main className="app">
      <Switch>
        <Route
          exact
          path='/'
          // component={LandingPage}
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
          // component={Dashboard}
        />
       
        <Route 
          path='/groups'
          // component={GroupsPage}
        />
        <Route 
          path='/topic/:topic_id'
          render={props => {return <Topic {...props} />}}
          // component={Topic}
        />
          <Route 
          path='/thought/:thought_id'
          render={props => {return <Thought {...props} />}}
          // component={Thought}
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