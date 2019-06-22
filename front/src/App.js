import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import StoriesTable from './components/StoriesTable';

import './App.css';

const App = () => (
  <div className='App'>
    <h1>Express & React</h1>
    <Router>
      <h4>
        <Link to='/stories'>
          <code>Stories</code>
        </Link>
      </h4>
      <Route exact path ='/' render={() => (
        <div>
          <h3>Click one of the links above.</h3>
        </div>
      )}/>
      <Route path='/stories' component={StoriesTable}/>
    </Router>
  </div>
);

export default App;
