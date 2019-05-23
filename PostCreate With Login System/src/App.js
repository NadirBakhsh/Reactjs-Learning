import React, { Component } from 'react';
import './App.css';
import FormDiv from './components/FormDiv'
import Wellcomeboard from './components/Wellocmebord'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      formDiv : true, // is ko bad may true karna hai post component bane k bad
      WellcomeBoard : false,
    }

  this.unMountFormDiv = this.unMountFormDiv.bind(this)
  this.unMountWellcomeBoard = this.unMountWellcomeBoard.bind(this)

    
  }

unMountFormDiv(){
  this.setState({
    formDiv : false,
    WellcomeBoard : true,
  })
}

unMountWellcomeBoard(){
  this.setState({
    formDiv : true,
    WellcomeBoard : false,
  })
}



  render() {
    const {formDiv,WellcomeBoard} = this.state;
    return (
      <div className="App">
      <header className="App-header">
      Sign In & Sign Up Application With Firebase and Post Create
      </header>

       {formDiv && <FormDiv unMountFormDiv={this.unMountFormDiv}/>}
      
      {
        WellcomeBoard && 
      <Wellcomeboard unMountWellcomeBoard={this.unMountWellcomeBoard}/>}
      
  
      
    </div>
    );
  }
}

export default App;

