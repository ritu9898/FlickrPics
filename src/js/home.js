import React from "react";
import axios from "axios";
import '../css/App.css';
import Search from "./search";

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [],
      q: ''
    }
    this.ChildElement = React.createRef();
  }

  // handleClick() {
  //   let childelement = this.ChildElement.current;
  //   console.log("current state of child is :  "+ childelement.state.name);
  // }

  callAPI(query) {

    let childelement = this.ChildElement.current;
    console.log("current state of child is :  "+ childelement.state.name);

    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios
    .get(
      url
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

    this.setState({
      list: this.props.list
    })
    // console.log('Called: '+ query);
  }

  componentDidMount() {
    if(this.props.query)
    {
      this.setState({
        q: this.props.query
      })
      console.log(this.state.q);
      // let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${this.state.q}&per_page=24&format=json&nojsoncallback=1`;
      // this.callAPI(url);
      this.callAPI(this.state.q);
    }
  }

  render(){
    let d;
    let count = 0;
    // const list = photo; //From config file
{var childelement = this.ChildElement.current;}
    return(
      <>
        <Search ref={this.ChildElement} />
        {  
            console.log("current state of child is :  "+ this.ChildElement.current.state.name)}
        {/* {console.log('First List: '+this.props.list)} */}
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
