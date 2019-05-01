import React, {Component} from  'react'
export default class Judge extends React.Component {
 constructor(props) {
  super(props)

  this.state = {stars: 0, available: false}
  this.applaud = this.applaud.bind(this)

  
 }

 applaud() {
   //Send this applaud status to Kid.js
   this.props.changeMode();
 }

 provideStars() {
   const {stars} = this.state;
   if(stars + 1 === 5){
     this.props.qualified()
   }

   this.setState({stars: stars + 1})
   this.props.perform(stars)
 }


 shouldComponentUpdate(props,nextstate){
  if(nextstate.stars > 5){
    return false;
  }
  return true;
}



 render() {
   const {stars, available,jugeUmount} = this.state;
   return (
     <div>
          <button type="button" onClick={this.applaud.bind(this)}>
      Appreciate performance
      </button>
      <button type="button" onClick={this.provideStars.bind(this)}>
      Provide stars
      </button>

      Kid is available: {available}

      Stars gained: {stars}
      
    </div>
   );
 }
}


