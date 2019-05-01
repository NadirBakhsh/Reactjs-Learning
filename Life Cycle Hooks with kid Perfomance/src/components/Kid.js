import React from 'react';
import { stat } from 'fs';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }

 qualified() {
   this.setState({startedPerforming: false})
 }

 componentDidUpdate(){
    if(this.props.isQualified && this.state.startedPerforming){
      this.qualified();
    }
 }

 componentWillUnmount(){
   this.props.unMountjudge()
 }

 

 static getDerivedStateFromProps(props, state){
  if(props.furtherSteps.length &&  state.danceSteps.length !== 5 ){
    return {
      danceSteps : state.danceSteps.concat(props.furtherSteps),
      startedPerforming: true,
      
    }  
  }

if(props.applaud){
  return {emotion : "Happy"}
}


 }


componentDidMount(){
   this.setState({
    danceSteps : ['step1', 'step2'],
  })
}



 render() {
   const {dressColor} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;

   return (
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}


Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
