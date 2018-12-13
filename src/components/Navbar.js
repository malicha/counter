import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Button } from 'reactstrap';
class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand><img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc" height="50px"></img>Santren Koding</NavbarBrand>
                    <Nav>
                        <NavItem onClick={()=> this.props.changePage("Kajian")}>
                            <NavLink>Kajian Koding</NavLink>
                        </NavItem>
                        <NavItem onClick={()=> this.props.changePage("Mondok")}>
                            <NavLink>Mondok Koding</NavLink>
                        </NavItem>
                        <NavItem onClick={()=> this.props.changePage("Kitab")}>
                            <NavLink>Kitab Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button outline color="primary">masuk/daftar</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;