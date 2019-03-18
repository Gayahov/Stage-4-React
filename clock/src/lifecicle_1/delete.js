import React, { Component, Fragment } from 'react';
import ChangeColor from './changes';

class Delete extends Component{
    state = {
        clicked:false
      }
      delete = () => {
        this.setState({clicked:true})
      }

    render() {
        return (
            <Fragment>
               {this.state.clicked ? null: <ChangeColor/>}
                <button onClick={this.delete} > Clear</button>
            </Fragment>
        );
    }
}

export default Delete;