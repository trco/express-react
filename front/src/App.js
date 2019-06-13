import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Express & React</h1>
          <p>
            {this.state.users.map((user) =>
              <p>{user.id}: {user.name}</p>
            )}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
