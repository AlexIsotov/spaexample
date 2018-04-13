import  React, { Component } from 'react';
import {NavLink, HashRouter} from 'react-router-dom';
import {Navbar} from 'reactstrap';

export class NavBar extends Component {
  render() {
    return (
	<HashRouter>
	<Navbar className= "bg-light">
		
			<NavLink to = '/'>Home</NavLink>
		
		
			<NavLink to = '/info'>Info</NavLink>
		
			
			<NavLink to = '/contact'>Contact</NavLink>
			
			<NavLink to = '/game'> Game </NavLink>
		
	</Navbar>
	</HashRouter>
    );
  }
}

export default NavBar;