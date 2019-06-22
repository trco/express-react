import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import Modal from 'react-modal';

import 'react-table/react-table.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// bind modal to the app element
Modal.setAppElement('#root');

class StoriesTable extends React.Component {

  state = {
    isLoading: true,
    modalIsOpen: false,
    data: [],
    modalContent: []
  }

  componentDidMount() {
    fetch('/stories')
      .then(res => res.json())
      .then(data => this.setState({
        data: JSON.parse(data.body).hits,
        isLoading: false
      }));
  }

  // modal
  openModal = (id) => {
    fetch('/story/' + id)
      .then(res => res.json())
      .then(data => this.setState({
        modalContent: JSON.parse(data.body),
        modalIsOpen: true
      }));
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
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
      accessor: "objectID",
      Cell: id => <><span onClick={() => this.openModal(id.value)} style={{cursor: 'pointer'}}>Details</span></>,
      filterable: false
    }]

    return (
      this.state.isLoading ?
        <div>Loading ...</div> :
        <div>
          <ReactTable
            data={data}
            filterable
            columns={columns}
            defaultPageSize={50}
            className="-striped -highlight"
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <div>
              <h1>Title: {this.state.modalContent.title}</h1>
              <p>Author: {this.state.modalContent.author}</p>
              <p><a href={this.state.modalContent.url}>Link</a></p>
              <button onClick={this.closeModal}>Close</button>
            </div>
          </Modal>
        </div>
    );
  }
}

export default StoriesTable;
