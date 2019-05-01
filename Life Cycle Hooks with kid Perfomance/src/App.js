import React, { Component } from 'react';
import './App.css';
import Kid from './components/Kid'
import Teacher from './components/Teacher'
import Judge from './components/Judge'
class App extends Component {

constructor(){
  super()

  this.state = {
    valuem : 0
  }
  this.updateSteps = this.updateSteps.bind(this);
  this.changeMode = this.changeMode.bind(this);
  this.perform = this.perform.bind(this);
  this.qualified = this.qualified.bind(this);
  this.unMountKid = this.unMountKid.bind(this);
  this.unMountjudge = this.unMountjudge.bind(this)
}

static getDerivedStateFromProps(p , s){
  s.valuem = 5
  
}

updateSteps(steps) {
  console.log('steps ===>', steps);
   this.setState({ furtherSteps: steps })
 }

 changeMode(mode){
  this.setState({ emotion : true })
 }

 perform(getingStar){
  console.log(getingStar)
  if(getingStar >= 5){
    this.setState({ startedPerforming: false })
  }
}


qualified(){
this.setState({isQualified : true})
}
 
unMountKid(){
  this.setState({kidUmount : true})
}

unMountjudge(){
  this.setState({Judge : false})
}


  render() {
    const {valuem,furtherSteps,emotion,startedPerforming,isQualified,kidUmount,jugeUmount} = this.state;
    console.log(jugeUmount)
    return (
      <div className="App">
      {valuem}
      
   { !kidUmount &&
   <Kid furtherSteps={furtherSteps}
    applaud={emotion}
    perform={startedPerforming}
    isQualified={isQualified} 
    jugeUmount={jugeUmount}
    unMountjudge={this.unMountjudge}
    dressColor='yellow'/>}

{ !kidUmount && <Teacher updateSteps={this.updateSteps} /> }<br/><br/>  
 
    <h2>Judge</h2>
   <Judge changeMode={this.changeMode} 
    perform={this.perform} 
    qualified={this.qualified}
   /> 

    <button onClick={this.unMountKid }> Aks to Studend go jude</button>

      </div>
      );
  }
}

export default App;
