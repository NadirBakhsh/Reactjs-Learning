import React, { Component } from 'react';
import { register } from '../config/firebase'


class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email : '',
      pass : ''
    }

  }


 async SignUp() {
    
    const { email, pass } = this.state;
    const userObj = {
      email,
      pass,
    }
    const registationDone = await register(email,pass ,userObj )
    if(registationDone){
      this.props.history.push('/Home')
    }
  }

  render() {


    return (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Email" /> <br /> <br />
          <input onChange={(e) => { this.setState({ pass: e.target.value }) }} type="password" placeholder="Password" /><br /> <br />
          <button onClick={this.SignUp.bind(this)}>Sign Up</button>

          <i onClick={() => {
            this.props.history.push('/')
          }} style={{ cursor: 'pointer', }}>Login</i>
        </div>
      </div>
    );
  }
}

export default SignUp;