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


class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand>Santren Koding</NavbarBrand>
                    <Nav>
                        <NavItem>Kajian Koding</NavItem>
                        <NavItem>Mondok Koding</NavItem>
                        <NavItem>Kitab Koding</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;