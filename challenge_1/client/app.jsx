import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import EventList from './components/EventList.jsx';
import Search from './components/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      currentPage: 1,
      numberOfPages: 0,
      eventData: [],
      perPage: 10
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getEvents(e) {
    e.preventDefault();
    let { searchKeyword, currentPage, perPage } = this.state;
    axios.get(`/events?q=${searchKeyword}`)
      .then((response) => {
        this.setState({
          numberOfPages: Math.ceil(response.data.length / perPage)
        }, () => {
          axios.get(`/events?q=${searchKeyword}&_page=${currentPage}`)
            .then(response => {
              this.setState({
                currentPage: 1,
                eventData: response.data
              });
            })
            .catch(err => {
              console.log('Error ', err);
              alert('Something went wrong!');
            });
        });
      })
      .catch(error => {
        alert('Something went wrong!');
      });
  }

  handleInputChange(e) {
    let searchKeyword = e.target.value
    this.setState({ searchKeyword });
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page.selected + 1
    }, () => {
      axios.get(`/events?q=${this.state.searchKeyword}&_page=${this.state.currentPage}`)
        .then(response => {
          this.setState({
            eventData: response.data
          });
        })
        .catch(err => {
          alert('Something went wrong!');
        })
    });
  }
  render() {
    let { eventData, numberOfPages } = this.state;
    return (
      <div style={{ margin: 20 }} >
        <h1>Historical Event Finder</h1>
        <Search handleInputChange={this.handleInputChange} getEvents={this.getEvents} />
        <EventList eventData={eventData} />
        <ReactPaginate
          className="pagination"
          pageCount={numberOfPages}
          pageRangeDisplayed={5}
          forcePage={0}
          marginPagesDisplayed={1}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          onPageChange={(page) => this.handlePageChange(page)}
        />
      </div>
    );
  }
}

export default App;