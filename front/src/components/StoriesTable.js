import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import matchSorter from 'match-sorter';

import StoryModal from './StoryModal';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

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
      dataField: 'objectID',
      text: 'Id'
    }, {
      dataField: 'title',
      text: 'Title'
    }, {
      dataField: 'author',
      text: 'Author'
    }];

    return (
      this.state.isLoading ?
        <div>Loading ...</div> :
        <div>
          <BootstrapTable
            keyField='id'
            data={stories}
            columns={columns}
            pagination={paginationFactory()}
            bootstrap4={true}
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
