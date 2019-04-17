import  React, { Component } from 'react';
import { HashRouter,Link} from 'react-router-dom';
import {Nav,Navbar, NavItem, NavLink} from 'reactstrap';

export class NavBar extends Component {
  render() {
    return (
	<HashRouter>
  	<Nav tabs className= "bg-light">
  			<NavLink  active  > <Link to = '/'>Home</Link> </NavLink>
  			<NavLink active> <Link to = '/info' >Info</Link> </NavLink>
  			<NavLink active> <Link to = '/contact'>Contact</Link> </NavLink>
  			<NavLink active> <Link to = '/game'>Game</Link> </NavLink>
  	</Nav>
	</HashRouter>
    );
  }
}

export default NavBar;
