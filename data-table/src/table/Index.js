import React, {Component} from 'react';
import TblRow from './TblRow';
import Data from './Data';
import Header from './Header';
import './css/table.css';



class Project extends Component {
    state = {
        data : [],
        busy : true,
        available : true,
        started: true,
    }
    dataComp = () => {
        this.sendData();
    }
    reload = () => {
        this.setState ({data: []});
        this.sendData();
    }
    sendData = () =>  {
        let data = Data();
        console.log (42)
        fetch("http://rest.learncode.academy/api/johnbob/friends", {
                method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((response) => {this.setState({data: response})})
            .catch(error => console.error('Error:', error));
    }
     makeRows  = () => {
         let getData = this.state.data; 
         let arrComp = [];
         console.log (this.state.busy) 
            if (getData.length === 0){
                arrComp.push(<TblRow  row_table = "Something..." key = {1} />)
            }else{
                for (let i = 0; i< getData.length; i ++){
                    if (getData[i].status == "Busy" && this.state.busy){
                        arrComp.push( <TblRow  row_table = {getData[i]} key = {i} />)
                    }
                    if (getData[i].status == "Available" && this.state.availbale){
                        arrComp.push( <TblRow  row_table = {getData[i]} key = {i} />)
                    }
                    if (getData[i].status == "Started" && this.state.started){
                        arrComp.push( <TblRow  row_table = {getData[i]} key = {i} />)
                    }
                }
                return arrComp
            }
        }
        render() {
            return (
                <table>
                    <Header/>
                    <tbody>
                        {this.makeRows()} 
                    <tr>
                        <td><input type='checkbox'     id='busy' onChange = {() => {this.setState({busy: !this.state.busy})}} checked={this.state.busy}/> Busy</td>
                        <td><input type='checkbox'  id='available' onChange = {() => {this.setState({available: !this.state.available})}} checked={this.state.available}/> Available</td>
                        <td><input type='checkbox' id='started' onChange = {() => {this.setState({started: !this.state.started})}} checked={this.state.started}/> Started</td>
                        <td><button type='button' onClick = {this.reload}>Reload</button></td>
                    </tr>
                    </tbody>
                </table>
            )

         }
    }



        









    


export default Project;