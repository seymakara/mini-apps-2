import React from 'react';
const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="eventInput"
        required={true}
        style={{ width: 300, marginBottom: 20 }}
        onChange={props.handleInputChange}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginBottom: 20 }}
        onClick={props.getEvents}
      >
        Search
      </button>
    </div>
  );
}

export default Search;