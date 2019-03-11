import React, {Component} from 'react';
import Box from './Box'



class TblRow extends Component {

    tblRow = () =>{
        let box_arr = [];
        let row_td = this.props.row_table;
        if (typeof row_td == "string"){
            return <Box col_table = {row_td} key = {1}/>
        }else{
            for (let i in row_td){
                box_arr.push(<Box col_table= {row_td[i]} key = {i}/>)
            }
            return box_arr
        }
    } 
    render (){
        return (
            <tr>

            {this.tblRow()}

            </tr>
        );
    }
}
export default TblRow;