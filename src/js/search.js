import React from "react";
import '../css/App.css';

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      query: ''
    }

    this.searchQuery = this.searchQuery.bind(this);
  }

  searchQuery() {
    this.setState({
      query: document.getElementById('query').value
    })
    console.log(this.state.query);
  }

  render() {
    return(
      <div>
        <input type="text" id="query"  />
        <button className="btn" onClick={this.searchQuery}>Search</button>
      </div>
    );
  }
}

export default Search;

