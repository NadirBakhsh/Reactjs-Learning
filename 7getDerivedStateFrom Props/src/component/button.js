import React, { Component } from 'react';

class Input extends Component {

constructor(props){
  super(props)
  this.state = {
    mail: props.mail
  }
}

static getDerivedStateFromProps(props){
  return {
     ma : props.ma
    }
}

  render() {
    return (
      <div>
        <input value={this.state.ma}/>
      </div>
    );
  }
}


export  {Input};
