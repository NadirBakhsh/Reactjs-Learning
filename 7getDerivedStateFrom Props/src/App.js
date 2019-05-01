import React, { Component } from 'react';
import {Input} from './component/button'
import ButtonAppBar from './component/nav'
import './App.css';
import { BottomNavigation } from '@material-ui/core';

class App extends Component {
constructor(props){
  super(props)
  this.state = { intput : 'admin@gmail.com'}
    
  }
 





  render() {
    return (
      <div className="App">
     
      <ButtonAppBar />



      {'this conpution inputy'}
     <Input  ma={this.state.intput}/>

      <br /><br />
     {'App dot Js'}
      <input value={this.state.intput} onChange={(e) => {this.setState({intput: e.target.value})}} />
      </div>
    );
  }
}

export default App;
