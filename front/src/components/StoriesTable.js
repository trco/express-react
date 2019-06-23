import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';

import StoryModal from './StoryModal';

import 'react-table/react-table.css';

class StoriesTable extends React.Component {

  state = {
    // table
    isLoading: true,
    stories: [],
    // modal
    modalIsOpen: false,
    modalContent: []
  }

  componentDidMount() {
    fetch('/stories')
      .then(res => res.json())
      .then(stories => this.setState({
        stories: JSON.parse(stories.body).hits,
        isLoading: false
      }));
  }

  // modal
  openModal = (id) => {
    // fetch data & save it to modalContent
    fetch('/story/' + id)
      .then(res => res.json())
      .then(story => this.setState({
        modalContent: JSON.parse(story.body),
        modalIsOpen: true
      }));
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  render () {
    // table data
    const stories = this.state.stories;

    // table columns
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
      accessor: "objectID",
      Cell: id => <><span onClick={() => this.openModal(id.value)} style={{cursor: 'pointer'}}>Details</span></>,
      filterable: false
    }]

    return (
      this.state.isLoading ?
        <div>Loading ...</div> :
        <div>
          <ReactTable
            data={stories}
            filterable
            columns={columns}
            defaultPageSize={50}
            className="-striped -highlight"
          />
          <StoryModal
            isOpen={this.state.modalIsOpen}
            modalContent={this.state.modalContent}
            onRequestClose={this.closeModal}
          />
        </div>
    );
  }
}

export default StoriesTable;
