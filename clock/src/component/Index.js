import React, { Component, Fragment } from 'react';
import Clock from '../assets/clock.png';
import './css/clock.css';

class Project extends Component {
  
    state = {
      time: 0,
      rotate: "",
      animation: "",
    };
    handleChange = (event) => {     
      this.setState({   
          time:event.target.value
        })
    };
     moveHand = () => {
       
      this.setState({  
          rotate: 0
        });
        
    for (let i = 0; i < this.state.time; i++) {
      this.state.rotate += 30
    }; 
    return this.setState({animation: "rotate(" + (this.state.rotate + "deg)")});
  };
     

  
  render() {
    return (
      <div className="App">

        <Fragment>
            <input type = "text" min="0" max="12"  id="time"  onChange={this.handleChange} value={this.state.time}/>
            <button type="button"  className="btn"  onClick = {this.moveHand}>Enter</button>
            <div className="container">
            <img src={Clock} /> 
            <div   className= "Pointer" style = {{ transform:this.state.animation}}> </div>
            </div>
        </Fragment>
      </div>
    );
  }
}


export default Project;