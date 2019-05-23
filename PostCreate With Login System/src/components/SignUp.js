import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import {registration} from '../config/firebase'

class SignUp extends Component {
constructor(props){
    super(props)
    this.state = {
   

    }


    this.submit = this.submit.bind(this)

}



submit(){
const {name,email,pass} = this.state;
const userData = {name,email,pass};
registration(email,pass,userData)
//registation component dismis
this.props.unMountFormDiv()
}


    render() {

        return (
            <div>
                <FormGroup >
                    <Label for="Name">Name</Label>
                    <Input type="email"  onChange={e =>{this.setState({name : e.target.value})}}   placeholder="Enter Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" onChange={e =>{this.setState({email : e.target.value})}}    id="password" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" onChange={e =>{this.setState({pass : e.target.value})}}   placeholder="Enter Passwaord" />
                </FormGroup>
                <Button onClick={this.submit} color="success">Sign Up</Button>{' '}

            </div>
        );
    }
}

export default SignUp;