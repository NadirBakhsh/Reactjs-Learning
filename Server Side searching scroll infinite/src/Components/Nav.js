import React, {Component} from 'react';
import '../App.css';
import Welcome from './Welcome';
import Table from './Table';
import Dashboard from "./Dashboard"

export default class Nav extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            value : "Dashboard", //value define for searching type

        }

        this.changeType = this.changeType.bind(this) // this function bind of type change
         
    }

    //this function of changing type
    changeType(event){

        const value = event.target.value; // its get value from select from

        if(value !== 'Dashboard'){ //this condition use for hide table when selete value = Dashboard
        fetch(`https://data.police.uk/api/${value}`) //geting Data from API
        .then(response => response.json())
        .then(result => this.setState({value,result})) // this is promiss set value and result in satart
        }else{
            this.setState({value} )
        }
     
    }

  


    render(){
        const {value,result} = this.state;
        return(
            <div className="App">
            <div className="nav">
            <nav className="navBar">
            {/* this is three tab console.log(result)*/ }
            <select  onChange={this.changeType} className="selectDesign">
            <option value='Dashboard'>Dashboard</option>
              <option value='forces'>Forces</option>
              <option value='crime-categories'>Crime Categories</option>
            </select>
           </nav>
           </div>
          {value === "Dashboard"  ? <Dashboard />  // welcome Compeneted import and set on condional redring 
          : 
          // this table component import
          <Table  
          result={result}
          value={value}/>   
          }


           </div> 
         
         
        )
    }
    }
