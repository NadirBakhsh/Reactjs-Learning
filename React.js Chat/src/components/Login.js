import React, { Component } from 'react';
import { login } from '../config/firebase'

  class Login extends Component {
      constructor(props) {
        super(props);
        this.state = {
          email : '',
          password : '',
        }

      }
      
      
      
    async loginFun(){
      const {email , password} = this.state;

      const loginDone = await login(email , password);
      if(loginDone){
        this.props.history.push('/Home')
      }
    }


      render() {
        const {email , password} = this.state;
        return (
            <div style={{width:'100%' , height:'100vh', display:'flex',justifyContent:'center', alignItems:'center'}}>
            <div>
                <input value={email} onChange={(e)=>{this.setState({email : e.target.value})}} type="text" placeholder="Email" /> <br /> <br />   
                <input value={password} onChange={(e)=>{this.setState({password : e.target.value})}} type="password" placeholder="Password" /><br /> <br /> 
                <button onClick={this.loginFun.bind(this)}>Login</button> <i onClick={()=>{
                     this.props.history.push('/SignUp')
                }} style={{cursor : 'pointer'}}>Sign UP</i>  
          </div> 
          </div>
        );
    }
}

export default Login;