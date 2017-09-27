import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
    }
    this.plusDivs = this.plusDivs.bind(this);
  }
  componentDidMount() {
    setInterval(this.plusDivs, 3000);
  }
  plusDivs() {
    if (this.state.slideIndex <= 3) this.setState(prev => prev.slideIndex++);
    if (this.state.slideIndex > 3) this.setState({slideIndex: 1});
    console.log(this.state.slideIndex);
  }
  render () {
    return (
      <div>
        <div className="slides">
          <img src="https://static.pexels.com/photos/461077/pexels-photo-461077.jpeg"
            alt="slideshow"
            className={this.state.slideIndex === 1 ? "show-slide" : "hide-slide"} />
          <img src="https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            alt="slideshow"
            className={this.state.slideIndex === 2 ? "show-slide" : "hide-slide"} />
          <img src="https://static.pexels.com/photos/7919/pexels-photo.jpg"
            alt="slideshow"
            className={this.state.slideIndex === 3 ? "show-slide" : "hide-slide"} />
          <Link to="pull-requests"><h1 className="enter-btn">Enter</h1></Link>
        </div>
      </div>
    )
  }
}