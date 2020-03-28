import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faTrash, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { UserProvider } from './contexts/UserContext'
import { ContentProvider } from './contexts/ContentContext'
import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker'

library.add(fab, faPlus, faMinus, faTrash, faTimes, faArrowLeft)


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </UserProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// serviceWorker.unregister()