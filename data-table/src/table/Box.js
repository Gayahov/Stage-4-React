import React, { Component } from 'react';

class Box extends Component{
  
    render() {
        return (
            <td>
                {this.props.col_table}
            </td>
        );
    }
}

export default Box;