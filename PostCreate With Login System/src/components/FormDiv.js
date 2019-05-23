import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'reactstrap';
import Login from './Login'
import SignUp from './SignUp'

class FormDiv extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login : true
    }

    this.loginFromShow = this.loginFromShow.bind(this)
    this.signUpFromShow = this.signUpFromShow.bind(this)

   
    

  }npm

  loginFromShow() {
    this.setState({
      login: true,
      signup: false,
    })
  }

  signUpFromShow() {
    this.setState({
      login: false,
      signup: true,
    })
  }


 

  render() {
   
    const { login, signup } = this.state;
    return (
      <div>
        <Row>

          <Col sm="4">
            <Button onClick={this.loginFromShow} color="primary" className="customBtn">Login</Button>
            <Button onClick={this.signUpFromShow} color="success" className="customBtn">Sign Up</Button>
            <Card body>
             
              {login && <Login unMountFormDiv={this.props.unMountFormDiv}/>}
             {signup && <SignUp unMountFormDiv={this.props.unMountFormDiv}/>}

            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default FormDiv;