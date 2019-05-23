import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//import { whileStatement } from '@babel/types';
import {logout} from '../config/firebase'

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

    this.onLogout = this.onLogout.bind(this)
    this.oncreatePost = this.oncreatePost.bind(this)
    this.viwePost = this.viwePost.bind(this)

  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

 onLogout(){
     logout()
     this.props.unMountWellcomeBoard()
 }

 oncreatePost(){
   this.props.createPostFun()
 }

 viwePost(){
  this.props.upLoadfun()
 }

  render() {

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="#" className="mr-auto">Wellcome</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" onClick={this.oncreatePost}>Create Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.viwePost}>Post Show</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.onLogout} >Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}