import React,{Component} from "react";
import Clock from '../assets/clock.png'


class Main extends Component{
    render(){
        return(
            <Fragment>
            <div className="container">
            <img  src={clock} /> 
            <div  className= "Pointer">{this.state.degree}
            </div>
            </div>
           c
            </Fragment>
        )
    }
}
export default Main;