import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';

import "react-table/react-table.css";

class StoriesTable extends React.Component {

  state = {
    isLoading: true,
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
    }]

    return (
      <ReactTable
        data={data}
        filterable
        columns={columns}
        defaultPageSize={50}
        className="-striped -highlight"
      />
    );
  }
}

export default StoriesTable;
