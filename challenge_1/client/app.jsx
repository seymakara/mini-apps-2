import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import EventList from './components/EventList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      currentPage: 1,
      numberOfPages: 0,
      eventData: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getEvents() {
    let { searchKeyword, currentPage } = this.state;
    axios.get(`/events?q=${searchKeyword}`)
      .then((response) => {
        console.log(this);
        this.setState({
          numberOfPages: response.data.length / 10
        }, () => {
          axios.get(`/events?q=${searchKeyword}&_page=${currentPage}`)
            .then(response => {
              console.log('get req success: ', response);
              this.setState({
                currentPage: 1,
                result: response.data
              });
            })
            .catch(err => {
              console.log('get req pagination error: ', err);
            });
        });
      })
      .catch(error => {
        console.log('get req pagination error:', error);
      });
  }

  handleInputChange(e) {
    let searchKeyword = e.target.value
    this.setState({ searchKeyword });
  }

  handlePageChange() {

  }



  render() {
    return (
      <div style={{ margin: 20 }} >
        <h1>Historical Event Finder</h1>
        <input
          type="text"
          className="form-control"
          id="eventInput"
          style={{ width: 300, marginBottom: 20 }}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
          onClick={this.getEvents}
        >
          Search
        </button>
        <EventList eventData={this.state.eventData} />
        <ReactPaginate
          className="pagination"
          pageCount={this.state.numberOfPages}
          pageRangeDisplayed={5}
          forcePage={0}
          marginPagesDisplayed={1}
          previousLabel={"< Previous"}
          nextLabel={"Next >"}
          onPageChange={(currentPage) => {
            console.log('currentPage', currentPage)
            this.setState({
              currentPage: currentPage.selected + 1
            }, this.handlePageChange);
          }}
        />
      </div>
    );
  }
}

export default App;