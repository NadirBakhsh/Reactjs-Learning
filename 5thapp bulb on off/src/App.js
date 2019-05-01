import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Onbtn,OffImg,OnImg,BrokenImg} from './component/btn'
import './App.css';


class App extends Component {

  constructor(){
    super()
    this.state = {
      bulbImg : 'off'
    }
  }

  toggle(e){
    this.setState({
      bulbImg : e
    })

    console.log(e)
  }
  
  render() {
    const {bulbImg} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        This React 5 Assignment
        </header>
        <Onbtn title='ON' event={this.toggle.bind(this,"on")}/>
        <Onbtn title="OFF" event={this.toggle.bind(this,"off")}/>
        <Onbtn title="Break" event={this.toggle.bind(this,"break")}/>
        {bulbImg === 'off' && <OffImg />}
        {bulbImg === 'on' && <OnImg  />}
        {bulbImg === 'break' && <BrokenImg />}
      </div>
    );
  }
}

export default App;
