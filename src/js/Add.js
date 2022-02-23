import React, { Component } from 'react'
import Home from './home';
import Image from './image';

export default class Add extends Component {


  constructor(){
    super();
    // this.getImage = this.getImage.bind(this);
  }

  getImage(e) {
    // debugger
    let bannerImage = document.getElementById('file').files[0];
    let tag = document.getElementById('tag').value;

    let imgData = this.getBase64Image(bannerImage);
    localStorage.setItem("imgData", imgData);
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    // debugger

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  render() {
    var dataImage = localStorage.getItem('imgData');
    return (
      <div>
        <input type="file" id="file" />
        <input type="text" id="tag" /> 
        <button onClick={((e) => this.getImage(e))}>Add</button>
        <Image src={'data:image/png;base64,'+{dataImage}} />
      </div>
    )
  }
}
