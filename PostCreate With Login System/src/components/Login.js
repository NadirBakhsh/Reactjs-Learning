import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { login,userGetName } from '../config/firebase'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData :{},

        }

        this.onLogin = this.onLogin.bind(this)

    }



    async onLogin() {
        const { email, password } = this.state;

        try {
             if (email !== undefined && password !== undefined) {
                const user = await login(email, password)
                userGetName("Nadir")  
                this.setState({
                    userData : user
                })
                
                this.props.unMountFormDiv()

            } else {
                alert("Emty Field Email And Password")
            }
        } catch (e) {

            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="email" onChange={e => { this.setState({ email: e.target.value }) }} placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" onChange={e => { this.setState({ password: e.target.value }) }} placeholder="Enter Passwaord" />
                </FormGroup>
                <Button onClick={this.onLogin} color="primary">Login</Button>

            </div>
        );
    }
}

export default Login;