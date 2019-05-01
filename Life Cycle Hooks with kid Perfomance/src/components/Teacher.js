import React from 'react';


export default class Teacher extends React.Component {
  constructor() {
    super()

    this.sendDataToKid = this.sendDataToKid.bind(this);
}


 sendDataToKid() {
	const furtherSteps = ['step3', 'step4', 'step5']
  //Send this data to Kid.js
  this.props.updateSteps(furtherSteps);
 }


 render() {
   
   return (
     <button onClick={this.sendDataToKid}>Get Help From Teacher</button>
   );
 }
}


/* sending child to parent
1. create function in parents that will change the state
value will e from parenter if needed
2) pass this function to the chill compement
3. call that function from child component*/

