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
    fetch('/stories')
    .then(res => res.json())
    .then(data => this.setState({ data: JSON.parse(data.body).hits }));
  }

  render () {
    // data
    const data = this.state.data;

    // columns
    const columns = [{
      columns: [
        {
          Header: "Id",
          accessor: "objectID",
          filterable: false
        },
        {
          Header: "Title",
          accessor: "title",
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["title"] }),
          filterAll: true
        },
        {
          Header: "Author",
          accessor: "author",
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["author"] }),
          filterAll: true
        },
        {
          Header: "Actions",
          Cell: <><a href='/'>Details</a> <a href='/'>Delete</a></>,
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
          defaultPageSize={50}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
