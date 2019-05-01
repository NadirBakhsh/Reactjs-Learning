import React, { Component } from 'react';


class Onbtn extends Component {

 render() {
    return (
      <button className="btn" onClick={this.props.event}>
        {this.props.title}
      </button>
    );
  }
}



  class OffImg extends React.Component {
    render() {
      return (<img className="img" src="https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg"/>)
    }
  }


  class OnImg extends React.Component {
    render() {
      return (<img className="img" src='https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn'/>)
    }
  }

  class BrokenImg extends React.Component {
    render() {
      return (<img className="img" src='https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736'/>)
    }
  }

  export  {Onbtn,OffImg,OnImg,BrokenImg};


