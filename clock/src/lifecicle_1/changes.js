import React, { Component, Fragment } from 'react';
import './style.css'

class ChangeColor extends Component{
    state = {
        number: 0,
        color: "",
    }
    
    incr = () => {
        let letters = '0123456789ABCDEF';
	    let colory = '#';
	    for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
	    }
        this.setState({number: this.state.number + 1, color: colory})
    }
    componentDidMount() {
        this.interval = setInterval(this.incr, 1000);
    }
    componentWillUpdate(){
        console.log(2)
    }
    componentWillUnmount(){
        clearInterval(this.time);
    }
 
    render() {
        return (
            <Fragment>
                <div  className="square"  style= {{backgroundColor:this.state.color}}>
                    <p>{this.state.number}</p>
                </div>
            </Fragment> 
        );
    }
}

export default ChangeColor;