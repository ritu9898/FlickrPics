import React from "react";
import axios from "axios";
import '../css/App.css';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    let query = "cat";

    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      // 'https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+"dog"+'&jsoncallback=?'
    )
    .then(response => {
      this.setState({
        list: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
  }

  render(){
    let d;
    // const list = photo; //From config file

    return(
      <>
        {/* <p>{this.state.list.length}</p> */}
        <div className="img-grid">
          {
            this.state.list.map((i, key) => {
              d = `http://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`
              return (<img src={d} alt="image" className="zoom" id={key} key={key} />)
            })
          }
        </div>
      </>
    );
  }
}

export default Home;
