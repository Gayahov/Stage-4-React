import React, { Component, Fragment } from 'react';
import Clock from '../assets/clock.png';
import './css/clock.css';

class Project extends Component {
  
    state = {
      time: 0,
      rotate: "",
      
    };
    
    
 handleChange=(event)=> {
  this.setState({time: 30* event.target.value});
}
 moveHands = ()=>{
  this.setState({rotate: this.state.value})
 }
  
  
  render() {
    return (
      <div className="App">

        <Fragment>
            <input type="text"  onChange={this.handleChange }/>
            <button type="button"  value={this.state.text} onClick={this.moveHands }>Enter</button>
            <div className="container">
            <img src={Clock} /> 
            <div   style = {{transform: `rotate${this.state.style}deg`}} className= "Pointer"> </div>
            </div>
        </Fragment>
      </div>
    );
  }
}

export default Project;