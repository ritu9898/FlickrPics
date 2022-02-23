import React from "react";
import axios from "axios";
import '../css/App.css';
import Home from "./home";
import Add from "./Add";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      query: 'Mountains',
      list: []
    }

    this.searchQuery = this.searchQuery.bind(this);
  }

  componentDidMount() {
    this.callAPI(this.state.query);
  }


  searchQuery() {
    this.setState({
      query: document.getElementById('query').value
    })
    console.log(this.state.query);

    this.callAPI(this.state.query);
  }

  callAPI() {
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`;
  
    axios
    .get(
      url
      // 'https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+"dog"+'&jsoncallback=?'
    )
    .then(response => {
      this.setState({
        list: response.data.photos.photo
      })
      console.log("List: "+this.state.list);
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
  }

  render() {
    return(
      <div>
        <div className="search-bar">
          <input type="text" id="query"  />
          <button className="btn" onClick={this.searchQuery}>Search</button>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Search;
