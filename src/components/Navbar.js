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
  import {Link} from 'react-router-dom';

import { Button } from 'reactstrap';
class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand tag ={Link} to="/" className="mynav"><img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc" height="50px"></img>Santren Koding</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink tag = {Link} to= "/kajian">Kajian Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag = {Link} to= "/mondok">Mondok Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag = {Link} to= "/kitab">Kitab Koding</NavLink>
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