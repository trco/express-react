import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

import StoriesTable from './components/StoriesTable';

import './App.css';

const App = () => (
  <div className='App'>
    <Router>
      <Container>
        <Row className="justify-content-center">
          <h1>Express & React</h1>
        </Row>
        <Row className="justify-content-center">
          <h4>
            <Link to='/stories'>
              <code>Stories</code>
            </Link>
          </h4>
        </Row>
        <Row className="justify-content-center">
          <Route exact path ='/' render={() => (
            <div>
              <h3>Click one of the links above.</h3>
            </div>
          )}/>
          <Route path='/stories' component={StoriesTable}/>
        </Row>
      </Container>
    </Router>
  </div>
);

export default App;
