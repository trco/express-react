import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';

import "react-table/react-table.css";
import './App.css';

class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ data: users }));
  }

  render () {
    // data
    const data = this.state.data;

    // columns
    const columns = [{
      columns: [
        {
          Header: "Id",
          accessor: "id",
          filterable: false
        },
        {
          Header: "Name",
          accessor: "name",
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["name"] }),
          filterAll: true
        },
        {
          Header: "Actions",
          Cell: <><a href='#'>Details</a> <a href='#'>Delete</a></>,
          filterable: false
        },
      ]
    }]

    return (
      <div className="App">
        <h1>Express & React</h1>
        <ReactTable
          data={data}
          filterable
          columns={columns}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
