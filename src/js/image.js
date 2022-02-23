import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="image" className="zoom" id={this.props.id} key={this.props.k} />
        {/* <span>X</span> */}
      </div>
    )
  }
}

